const express = require('express')
const {getHomePage, getTest, postCreateUser,CreateUserPage,UpdateUserPage} = require('../controllers/HomeController')
const router = express.Router();

router.get('/', getHomePage);

router.post('/create-user',postCreateUser)

router.get('/create',CreateUserPage)
router.get('/update/:id',UpdateUserPage)


module.exports = router;