const express = require("express");
const app = express()
const cors = require("cors")


app.use(cors());
app.use(express.json());


app.use((req, res, next) => {
    res.status(200).send(
        `<h1>Application is running...</h1>`
    );
})

module.exports = app;