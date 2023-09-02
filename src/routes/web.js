const express = require('express')
const {getHomePage, postCreateUser,CreateUserPage,UpdateUserPage,postUpdateUser, DeleteUserPage, postDeleteteUser} = require('../controllers/HomeController')
const router = express.Router();

router.get('/', getHomePage);

router.post('/create-user',postCreateUser)
router.post('/update-user',postUpdateUser)
router.post('/delete-user',postDeleteteUser)

router.get('/create',CreateUserPage)
router.get('/update/:id',UpdateUserPage)
router.get('/delete/:id',DeleteUserPage)


module.exports = router;