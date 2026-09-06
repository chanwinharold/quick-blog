const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const connectDB = require("./configs/database");
const adminRouter = require("./routes/admin.route");
const blogRouter = require("./routes/blog.route");


// Database connection
connectDB().then(res => {
    console.log(res)
}).catch(err => {
    console.error(err)
})


// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/public")));


// App routes
app.use(`/api/blog`, blogRouter)
app.use(`/api/admin`, adminRouter)
app.use((req, res) => {
    res.status(200).send(
        `<h1>Application is running...</h1>`
    );
})

module.exports = app;