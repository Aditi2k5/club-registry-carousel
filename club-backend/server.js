import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'
import bycrypt from 'bcrypt'

const app = express()
app.use(cors());

app.use(express.json())

const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"Aditi.2k5",
  database:"login"
})

app.post('/register', (req, res) => {
  const { email, password } = req.body;

  // Basic validation
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  // SQL query to insert new user
  const sql = 'INSERT INTO users (email, password) VALUES (?, ?)';
  
  // Execute the query
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ message: 'Database error' });
    }
    res.status(201).json({ message: 'User registered successfully!' });
  });
});

app.listen(8081, ()=>{
  console.log("listening")
})