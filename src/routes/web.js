const express = require('express')
const {getHomePage, getTest} = require('../controllers/HomeController')
const router = express.Router();

router.get('/home', getHomePage);
router.get('/', getTest);

module.exports = router;