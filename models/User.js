const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User= new Schema({
    username: String,
    img: String,
    bio: String,
    wish:[{
        type: Schema.Types.ObjectId,
        ref:'Wish'
    }]
});

module.exports = mongoose.model("User", User)