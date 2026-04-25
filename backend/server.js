// We import Express framework
const express = require("express")
// We create an instance of Express, this will be our server
const app = express()
// We import promise-mysql in order to access to our database
const mysql = require("promise-mysql")

app.use(express.urlencoded({ extended: false })) //Allows us to translate our URLs into objects to retrieve URL parameters (retrieve the form data in POST in the req.body object)
app.use(express.json()) //convert the request body data into a JavaScript object

const cors = require('cors') //we use the cors library to authorize cross-origin requests (API)
app.use(cors()) //cors is used to allow cross-origin requests (API)

app.use(express.static(__dirname + '/public')) //we put the public folder directly at the root of the project to be able to use it directly

const dotenv = require("dotenv")
dotenv.config() //We load the environment variables from a .env file

//Routes import
const userRoutes = require("./routes/userRoutes")
const projectRoutes = require("./routes/projectRoutes")
const projectAreaRoutes = require("./routes/projectAreaRoutes")
const roleRoutes = require("./routes/roleRoutes")
const windModelRoutes = require("./routes/windModelRoutes")
const typeSolarRoutes = require("./routes/typeSolarRoutes")
const statusProjectRoutes = require("./routes/statusProjectRoutes")
const developerRoutes = require("./routes/developerRoutes")
const authRoutes = require("./routes/authRoutes")


// Connexion to the database
mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    }).then((db) => {
        console.log('Connexion à la base de données avec succès.')
        //We test the connection to the database every 10 seconds to ensure it is still active
        setInterval(async function(){
        let res = await db.query('SELECT 1')
        }, 10000)
        //We define a test route to verify that API is working and server is online
        app.get('/', async(req, res) => {
            res.json({ status: 200, msg: "WebGIS Application" })
        })
        
        userRoutes(app, db)
        projectRoutes(app, db)
        projectAreaRoutes(app, db)
        roleRoutes(app, db)
        windModelRoutes(app, db)
        typeSolarRoutes(app, db)
        statusProjectRoutes(app, db)
        developerRoutes(app, db)
        authRoutes(app, db)
    })
    .catch(err => console.log(err))

//Server launch on port 9500
const PORT = process.env.PORT || 9500

app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`)
})
