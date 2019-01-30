const User = require('../models/User')
const Wish = require('../models/Wish')

const userController = {

    index: (req, res) => {
        User.find({})
            .then((allUsers) => {
                res.send(allUsers)
            })
    },
    
    show: (req, res) => {
        User.findById(req.params.usersId).populate('wish')
            .then(usersAndWishes =>{
            res.send(usersAndWishes) 
        })
    },
    
    update: (req, res) => {
        User.findByIdAndUpdate(req.params.usersId, req.body)
            .then((updatedUser) => {
                updatedUser.save()
                res.send(updatedUser)
            })
    },
    
    delete: (req, res) => {
        User.findByIdAndDelete(req.params.usersId)
            .then(() =>{
                res.sendStatus(200)
            })
    },
    create: (req, res) => {
        User.create(req.body)
            .then((newuser) => {
                res.send(newuser)
            })
    }

}

module.exports = userController