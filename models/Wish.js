const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Wish = new Schema({
    img: String,
    description: String,
    budget: String
});

module.exports = mongoose.model("Wish", Wish)