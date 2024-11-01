const { Pool } = require('pg');
const queries = require('../queries/entries.queries') // Queries SQL

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    port: '5432',
    database: 'postgres',
    password: '123456'
});

// GET
const getEntriesByTitle = async (title) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getEntriesByTitle, [title])
        result = data.rows

    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// GET
const getAllEntries = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAllEntries)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    }
    return result
}

// CREATE
const createEntry = async (entry) => {
    const { title, content, email, category } = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createEntry, [title, content, email, category])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// DELETE
const deleteEntry = async (entryToDelete) => {
    let title = entryToDelete;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteEntry, [title])
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
const updateEntry = async (entry) => {
    const { title, content, date, category } = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.updateEntry, [title, content, date, category])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}
const entries = {
    getEntriesByTitle,
    getAllEntries,
    createEntry,
    deleteEntry,
    updateEntry,
}

module.exports = entries;


// Pruebas

/*     getEntriesByEmail("birja@thebridgeschool.es")
    .then(data=>console.log(data)) */


/*
getAllEntries()
.then(data=>console.log(data))
*/


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