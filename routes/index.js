// Requirement information
const express = require('express')
const router = express.Router()
const thriftController = require('../controllers/thriftController')
const findController = require('../controllers/findController')

router.get('/api/thrift', thriftController.index)
router.post('/api/thrift/', thriftController.create)
router.delete('/api/thrift/:thriftId', thriftController.delete)

router.get('/api/find', findController.index)
router.delete('/api/find/:findId', findController.delete)
router.patch('/api/find/:findId', findController.update)
router.post('/api/find/', findController.create)



module.exports = router