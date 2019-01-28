require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI).then(() =>{
    console.log("MONGODB is now connected")
})

// mongoose.connection.once('open', () => {
// console.log(`Mongoose has connected to MongoDB`)
// })


module.exports = mongoose;
// mongoose.connection.on('error', (error) => {
// console.error(`MongoDB connection error!!! ${error}`)
// process.exit(-1)
// })