const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Thrift = new Schema({
    store: String,
    description: String,
    location: String
});

module.exports = mongoose.model("Thrift", Thrift)