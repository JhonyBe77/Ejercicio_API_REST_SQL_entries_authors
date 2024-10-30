const { Pool } = require('pg');
const queries = require('../queries/authors.queries') // Queries SQL

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    port: '5432',
    database: 'postgres',
    password: '123456'
});


// GET
const getAllAuthors = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAllAuthors)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    }
    return result
}

const getOneAuthor = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getOneAuthor, [email])
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    }
    return result
}

// CREATE
const createAuthor = async (author) => {
    const { name, surname, email, image } = author;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createAuthor, [name, surname, email, image])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

//UPDATE
const updateAuthor = async (author) => {
    const {name, surname, email, image} = author;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.updateAuthor, [name, surname, email, image])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

//UPDATE
const deleteAuthor = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteAuthor, [email])
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}


const entries = {
    //getEntriesByTitle,
    getAllAuthors,
    getOneAuthor,
    createAuthor,
    deleteAuthor,
    updateAuthor,
}

module.exports = entries;


// Pruebas

/*     getEntriesByEmail("birja@thebridgeschool.es")
    .then(data=>console.log(data)) */



/* getAllAuthors()
.then(data=>console.log(data)) */



/* let newEntry = {
    title: "Se acabaron las mandarinas de TB",
    content: "Corren rumores de que papa noel tenía un saco vacio y lo llenó",
    email: "guillermu@thebridgeschool.es",
    category: "sucesos"
}

createEntry(newEntry)
    .then(data => console.log(data)) */

    // PRUEBAS DE CREAR --> ESTO NO FUNCIONA!!!!!!!!!
    /* let newEntry = {
        "title": "MACARRONES 3 CON TOMATE",
        "content": "1234564756",
        "date": "2024-10-22T22:00:00.000Z",
        "category": "Comida"
    }
    createEntry(newEntry)
        .then(data => console.log(data)) */

 /*        // GET 1 AUTHOR (FUNCIONA OK)
getOneAuthor("birja@thebridgeschool.es")
.then(data=>console.log(data)) */

// -- POST NEW AUTHOR
// http://localhost:3000/api/authors/ 
/* let newAuthor = {
    "name": "1",
    "surname": "1",
    "email": "2neuvoautor@gmail.com",
    "image": "https://randomuser.me/api/portraits/thumb/men/60.jpg"
}

createAuthor(newAuthor)
    .then(data => console.log(data)) */

    // -- PUT (UPDATE AUTHOR)  
/* let updatedAuthor = {
    "name": "Alejandru",
    "surname": "Regex22",
    "email": "asjkfkjsaf",
    "image": "www.gatitos.com"
} */

// // Aquí dentro habrá un INSERT INTO
/* updateAuthor(updatedAuthor)
    .then(data => console.log(data)) */

    // PRUEBAS DE BORRAR (FUNCIONA OK)
/* deleteAuthor("muchelle@thebridgeschool.es")
.then(data => console.log(data)) */