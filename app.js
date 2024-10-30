const express = require('express')
const app = express()
const port = 3000

// Rutas
//const entriesRoutes = require("./routes/entries.routes")
const authorsRoutes = require("./routes/authors.routes")


app.use(express.json()); // Habilito recepción de JSON en servidor

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Rutas
//API
//app.use('/api/entries',entriesRoutes);
app.use('/api/authors',authorsRoutes);


app.listen(port, () => {
  console.log(`Funcionando en: http://localhost:${port}`)
})