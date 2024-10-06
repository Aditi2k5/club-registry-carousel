import sqlite3
import json
import re
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import parse_qs, urlparse
import hashlib
import os

# Database setup
def create_database():
    conn = sqlite3.connect('clubregistry.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS users
                 (id INTEGER PRIMARY KEY, username TEXT UNIQUE, password TEXT)''')
    conn.commit()
    conn.close()

def add_user(username, password):
    if not is_valid_email(username):
        return False, "Invalid email format. Must be in the form aa1234@srmist.edu.in"
    conn = sqlite3.connect('clubregistry.db')
    c = conn.cursor()
    try:
        hashed_password = hashlib.sha256(password.encode()).hexdigest()
        c.execute("INSERT INTO users (username, password) VALUES (?, ?)", (username, hashed_password))
        conn.commit()
        return True, "User registered successfully"
    except sqlite3.IntegrityError:
        return False, "Username already exists"
    finally:
        conn.close()

def verify_user(username, password):
    conn = sqlite3.connect('clubregistry.db')
    c = conn.cursor()
    c.execute("SELECT password FROM users WHERE username = ?", (username,))
    result = c.fetchone()
    conn.close()
    if result:
        hashed_password = hashlib.sha256(password.encode()).hexdigest()
        return hashed_password == result[0]
    return False

def is_valid_email(email):
    pattern = r'^[a-zA-Z]{2}\d{4}@srmist\.edu\.in$'
    return re.match(pattern, email) is not None

# HTTP Request Handler
class RequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            with open('index.html', 'rb') as file:
                self.wfile.write(file.read())
        else:
            self.send_error(404)

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        
        if self.headers.get('Content-Type') == 'application/json':
            data = json.loads(post_data.decode('utf-8'))
        else:
            data = parse_qs(post_data.decode('utf-8'))
            data = {k: v[0] for k, v in data.items()}

        if self.path == '/register':
            success, message = add_user(data.get('username'), data.get('password'))
            self.send_response(201 if success else 400)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'message': message}).encode())
        elif self.path == '/login':
            if verify_user(data.get('username'), data.get('password')):
                self.send_response(200)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'message': 'Login successful'}).encode())
            else:
                self.send_response(401)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'message': 'Invalid username or password'}).encode())

def run_server(port=8000):
    create_database()
    server_address = ('', port)
    httpd = HTTPServer(server_address, RequestHandler)
    print(f'Server running on port {port}')
    httpd.serve_forever()

if __name__ == '__main__':
    run_server()