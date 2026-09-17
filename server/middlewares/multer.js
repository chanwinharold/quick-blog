const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../../client/public/images/blogs"))
    },
    filename: function (req, file, cb) {
        const uniqueName = `${Date.now()}-${String(file.originalname).replace(" ", "_").toLowerCase()}`;
        cb(null, uniqueName)
    }
})

const upload = multer({storage})

module.exports = upload;
