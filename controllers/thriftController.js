const Thrift = require('../models/Thrift')



const thriftController = {
    index: (req, res) => {
        Thrift.find({})
            .then((allThrifts) => {
                res.send(allThrifts)
            })
    },
   
    update: (req, res) => {
        Thrift.findByIdAndUpdate(req.params.thriftId, req.body)
            .then((editedThrift) => {
                editedThrift.save()
                res.send(editedThrift)
            })
    },
    delete: (req, res) => {
        Thrift.findByIdAndDelete(req.params.thriftId)
            .then(() => {
                res.sendStatus(200)
            })
    },
    create: (req, res) => {

        Thrift.create(req.body)
            .then((newThrift) => {
                    res.send(newThrift)
                })
    }
}

module.exports = thriftController