const author = require('../models/authors.model'); // Importar el modelo de la BBDD

// DEVOLVER RUTAS
// GET http://localhost:3000/authors --> ALL
const getAllAuthors = async (req, res) => {
    let authors = await author.getAllAuthors(req.query);
    res.status(200).json(authors); // [] con los authors encontradas
}

// GET http://localhost:3000/authors --> ALL
const getOneAuthor = async (req, res) => {
    let {email} = req.query;
    let authors = await author.getOneAuthor(email);
    res.status(200).json(authors); // [] con los authors encontradas
}

const createAuthor = async (req, res) => {
    const newAuthor = req.body; // {name, surname, email, image}
    const response = await entry.createAuthor(newAuthor);
    res.status(201).json({
        "items_created": response,
        data: newAuthor
    });
}

// Crear update por title
const updateAuthor = async (req, res) => {
    const author = req.body; // {title,content,email,category}
    const response = await entry.updateAuthor(newEntry);
    res.status(201).json({
        "items_updated": response,
        data: newAuthor
    });
}

//Delete
const deleteAuthor = async (req, res) => {
    const email = req.body; // {email}
    const response = await author.updateAuthor(email);
    res.status(200).json({
        message: `Se ha borrado ${email}`,
        "items_delete": response,
        data: newAuthor
    });
}
module.exports = {
    getAllAuthors,
    getOneAuthor,
    createAuthor,
    deleteAuthor,
    updateAuthor
}