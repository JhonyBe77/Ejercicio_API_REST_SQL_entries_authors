SELECT * 
FROM authors

SELECT name,
FROM authors WHERE name = 'Alejandru'


INSERT INTO authors (name, surname, email, image)
VALUES ('Bolita', 'perrito', 'jjjhotmail.com', 'http//...')

UPDATE authors
SET surname = 'Regex', email = 'alejandru@thebrigeschool.es', image = 'https://randomuser.me/api/portraits/thumb/men/75.jpg'
WHERE name = 'Alejandru'

ALTER TABLE authors
ADD active bit;
UPDATE authors
SET active = '0'

UPDATE authors
SET active = '1'
WHERE email='albertu@thebridgeschool.es'