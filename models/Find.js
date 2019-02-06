const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Find = new Schema({
    username: String,
    budget: String,
    description: String,
    image: String
});

module.exports = mongoose.model("Find", Find)