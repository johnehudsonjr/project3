const express = require('express')
const app = express()
const routes = require('./routes/index')
const mongoose = require('mongoose')

require('dotenv').config()


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(__dirname + '/client/build/'))

app.get('/', (req, res) => {
res.sendFile(__dirname + '/client/build/index.html')
})

app.use('/', routes)

// MongoDB uri is where DB is stored
// const uri = process.env.MONGODB_URI;

// mongoose.connect(uri, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// });

// const connection = mongoose.connection;

// connection.once('open', () => {
//     console.log("MongoDB database connection established successfully");
// })

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
console.log(`Server is listening on PORT: ${PORT}`)
}) 