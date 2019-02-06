const Find = require('../models/Find')


const findController = {
    index: (req, res) => {
        Find.find({})
            .then((allFinds) => {
                res.send(allFinds)
            })
    },
   
    update: (req, res) => {
        Find.findByIdAndUpdate(req.params.findId, req.body)
            .then((editedFind) => {
                editedFind.save()
                res.send(editedFind)
            })
    },
    delete: (req, res) => {
        Find.findByIdAndDelete(req.params.findId)
            .then(() => {
                res.sendStatus(200)
            })
    },
    create: (req, res) => {

        Find.create(req.body)
            .then((newFind) => {
                    res.send(newFind)
                })
    }
}

module.exports = findController