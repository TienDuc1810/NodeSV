const express = require('express')
const {GetAPIUser, CreateAPIUser, UpdateAPIUser, DeleteteAPIUser } = require('../controllers/APIController')
const router = express.Router();

router.get('/v1/get-user',GetAPIUser)
router.post('/v1/create-user',CreateAPIUser)
router.put('/v1/update-user/:id',UpdateAPIUser)
router.delete('/v1/delete-user/:id',DeleteteAPIUser)

module.exports = router;