const {MONGODB_URI} = require("./env")
const mongoose = require("mongoose")


const connectDB = async () => {
    try {
        await mongoose.connect(`${MONGODB_URI}/quickblog`);
        return `✅ Database connected`
    } catch (e) {
        return `❌ Database connection error : ${e.message}`
    }
}

module.exports = connectDB;