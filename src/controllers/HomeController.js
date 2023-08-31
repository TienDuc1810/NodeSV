const connection = require('../config/database')
const { GetAllUsers,EditUsers } = require('../services/CRUDservices')

const getHomePage = async (req, res) => {
    let results = await GetAllUsers();
    return res.render('Home.ejs', { listUser: results })
}

const postCreateUser = async (req, res) => {
    let { email, name, city } = req.body;
    let [results, fields] = await connection.query(`INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, name, city]);
    res.send('Create User Success!');
}

const CreateUserPage = (req, res) => {
    res.render('CreateUser.ejs')
}

const UpdateUserPage = async (req, res) => {
    const UserID = req.params.id;
    let result = await EditUsers(UserID);
    return res.render('Edit.ejs', {ID: result})
}

module.exports = {
    getHomePage, postCreateUser, CreateUserPage,UpdateUserPage
}