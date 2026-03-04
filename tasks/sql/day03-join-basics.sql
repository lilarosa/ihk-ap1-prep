-- Day 03: JOIN Basics
-- Topic: INNER JOIN / LEFT JOIN / GROUP BY

-- 1) Setup
CREATE TABLE classes (
  class_id INT,
  class_name VARCHAR(50)
);

INSERT INTO classes (class_id, class_name) VALUES
(1, 'A1'),
(2, 'B1');

-- Add class_id to students if missing
ALTER TABLE students ADD class_id INT;

UPDATE students SET class_id = 1 WHERE name IN ('Anna', 'Ben', 'Coco');
UPDATE students SET class_id = 2 WHERE name IN ('David', 'Eva');

-- Optional: one student without class (for LEFT JOIN demo)
INSERT INTO students (id, name, age, city, class_id)
VALUES (6, 'Lina', 19, 'Berlin', NULL);

-- 2) INNER JOIN: student + class
SELECT s.name, c.class_name
FROM students s
INNER JOIN classes c ON s.class_id = c.class_id;

-- 3) INNER JOIN + filter city
SELECT s.name, c.class_name
FROM students s
INNER JOIN classes c ON s.class_id = c.class_id
WHERE s.city = 'Berlin';

-- 4) GROUP BY: count students per class
SELECT c.class_name, COUNT(*) AS student_count
FROM students s
INNER JOIN classes c ON s.class_id = c.class_id
GROUP BY c.class_name;

-- 5) LEFT JOIN: students without class
SELECT s.name
FROM students s
LEFT JOIN classes c ON s.class_id = c.class_id
WHERE c.class_id IS NULL;
