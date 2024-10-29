const queries = {
    /* getEntriesByEmail: `
    SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
    FROM entries AS e
    INNER JOIN authors AS a
    ON e.id_author=a.id_author
    WHERE a.email=$1
    ORDER BY e.title;`, */

    /* getEntriesByTitle: `
    SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
    FROM entries AS e
    INNER JOIN authors AS a
    ON e.id_author=a.id_author
    WHERE a.title=$1
    ORDER BY e.title;`,
 */
    createEntry: `
        INSERT INTO entries(title,content,date,category)
        VALUES ($1,$2,$3,$4)`,
        
    getAllEntries:
        `SELECT e.title, e.content, e.date, e.category, a.name, a.surname, a.image, a.email
        FROM entries AS e
        INNER JOIN authors AS a
        ON e.id_author = a.id_author;`,

    updateEntry:
        `UPDATE entries
        SET content = $2, date = $3, category = $4
        WHERE title = $1`,

    deleteEntry: `DELETE
        FROM entries
        WHERE title = $1`,


    /* createEntry: `INSERT INTO entries(title,content,id_author,category) 
    VALUES ($1,$2,
    (SELECT id_author FROM authors WHERE email=$3),$4)`, */
}
module.exports = queries;