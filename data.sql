CREATE DATABASE club_db;
USE club_db;
CREATE TABLE clubs (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  logo VARCHAR(255),
  description TEXT,
  leads TEXT,
  domains TEXT,
  events TEXT,
  instagram_link VARCHAR(255),
  apply_link VARCHAR(255)
);
ALTER TABLE clubs DROP COLUMN faculty_in_charge;
DESCRIBE clubs;
INSERT INTO clubs (name, logo, description, leads, domains, events, instagram_link, apply_link)
VALUES ('SKETCH', '/logos/SKETCH.png', 'A club focused on AI', 'John Doe', 'AI, Machine Learning', 'No event as of now', 'https://instagram.com/aiclub', 'https://apply/aiclub');


