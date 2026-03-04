-- Day 02: UPDATE + DELETE Basics
-- Topic: UPDATE / DELETE / WHERE safety

-- Dataset assumption: students(id, name, age, city, class_id)

-- Q1: Set Ben's age to 18
UPDATE students
SET age = 18
WHERE name = 'Ben';

-- Q2: Rename Munich to Muenchen
UPDATE students
SET city = 'Muenchen'
WHERE city = 'Munich';

-- Q3: Set all age < 18 to 18
UPDATE students
SET age = 18
WHERE age < 18;

-- Q4: Delete David
DELETE FROM students
WHERE name = 'David';

-- Q5: Delete Hamburg students with age >= 21
DELETE FROM students
WHERE city = 'Hamburg' AND age >= 21;

-- Q6: Safe delete practice (likely affects 0 rows)
DELETE FROM students
WHERE id > 100;

-- Verification examples
SELECT * FROM students ORDER BY id;
SELECT COUNT(*) AS total_students FROM students;
