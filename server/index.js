const http = require("http");
const app = require("./app");
const {PORT} = require("./config");


const server = http.createServer(app);
server.listen(PORT || 8080, function () {
    console.log(`Server is running on http://localhost:${PORT}`);
})