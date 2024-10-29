SELECT *
FROM entries

SELECT e.title, e.content, e.date, e.category, a.name, a.surname, a.image
FROM entries AS e
INNER JOIN authors AS a
ON e.id_author = a.id_author;


UPDATE entries
SET title = $1, content = $2, date = $3, category = $4
WHERE id_entry = $5;

DELETE
FROM entries
WHERE title = $1;