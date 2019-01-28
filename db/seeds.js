const User = require('../models/User')
const Wish = require('../models/Wish')
const mongoose = require('mongoose')

const wish1 = new Wish({
    img: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1525805107/476432_KHNRN_8642_001_057_0017_Light-Dionysus-GG-Supreme-super-mini-bag.jpg",
    description: "GUCCIIIII",
    budget: "50"
});

const wish2 = new Wish({
    img: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1525805107/476432_KHNRN_8642_001_057_0017_Light-Dionysus-GG-Supreme-super-mini-bag.jpg",
    description: "Balenciaga",
    budget: "500"
});

const user1 = new User({
    username: "Johnny",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Alpaca_%2831562329701%29.jpg/800px-Alpaca_%2831562329701%29.jpg",
    bio: "I love thriftingggggg",
    wish:[wish1, wish2]
});

User.deleteMany({})
.then(()=> Wish.deleteMany({}))
.then(()=> Wish.insertMany([wish1, wish2]))
.then(()=> user1.save())
.then(()=> console.log("Database Seeded"))
