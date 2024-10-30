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

    getAllAuthors: `SELECT * 
        FROM authors
        WHERE active = '0'`,

    getOneAuthor: `SELECT *
        FROM authors WHERE email = $1`,

    createAuthor: `INSERT INTO authors (name, surname, email, image, active)
        VALUES ($1, $2, $3, $4, '0')`,

    updateAuthor:
        `UPDATE authors
        SET surname = $2, email = $3, image = $4, active = '0'
        WHERE name = $1`,
        
    deleteAuthor:
        `UPDATE authors
        SET active = '1'
        WHERE email= $1`

    /* createEntry: `INSERT INTO entries(title,content,id_author,category) 
    VALUES ($1,$2,
    (SELECT id_author FROM authors WHERE email=$3),$4)`, */
}
module.exports = queries;