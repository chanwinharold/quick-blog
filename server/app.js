const express = require("express");
const app = express()
const cors = require("cors")
const connectDB = require("./configs/database")


// Database connection
connectDB().then(res => {
    console.log(res)
}).catch(err => {
    console.error(err)
})


// Middlewares
app.use(cors());
app.use(express.json());


// App routes
app.use((req, res, next) => {
    res.status(200).send(
        `<h1>Application is running...</h1>`
    );
})

module.exports = app;