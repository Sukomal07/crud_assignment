const mongoose = require('mongoose')

const connectToDb = async() =>{
    mongoose.connect(process.env.MONGO_URI)
    .then((conn) =>{
        console.log(`Connected to db:${conn.connection.host}`);
    })
    .catch((err) =>{
        console.log(err);
        process.exit(1)
    })
}

module.exports = connectToDb