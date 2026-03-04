-- Day 01: SQL SELECT Basics
-- Topic: SELECT / WHERE / ORDER BY / AND

-- 1) Setup table
CREATE TABLE students (
  id INT,
  name VARCHAR(50),
  age INT,
  city VARCHAR(50)
);

INSERT INTO students (id, name, age, city) VALUES
(1, 'Anna', 19, 'Berlin'),
(2, 'Ben', 17, 'Hamburg'),
(3, 'Coco', 20, 'Berlin'),
(4, 'David', 18, 'Munich'),
(5, 'Eva', 21, 'Hamburg');

-- 2) Tasks
-- Q1: all student data
SELECT * FROM students;

-- Q2: name and city
SELECT name, city FROM students;

-- Q3: students with age >= 18
SELECT * FROM students WHERE age >= 18;

-- Q4: students in Berlin
SELECT * FROM students WHERE city = 'Berlin';

-- Q5: all students sorted by age desc
SELECT * FROM students ORDER BY age DESC;

-- Q6: students in Hamburg and age >= 18
SELECT city, age FROM students WHERE city = 'Hamburg' AND age >= 18;

-- 3) Bonus
SELECT COUNT(*) FROM students;
SELECT AVG(age) FROM students;
SELECT city, COUNT(*) FROM students GROUP BY city;
