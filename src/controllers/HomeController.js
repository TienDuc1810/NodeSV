const connection = require('../config/database')
const { GetAllUsers,EditUsers,UpdateUsers,DeleteUsers } = require('../services/CRUDservices')

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

const postUpdateUser = async (req, res) =>{
    let { email, name, city, UserID } = req.body;
    await UpdateUsers(email, name, city, UserID);
    res.redirect('/');
}

const DeleteUserPage = async (req, res) => {
    const UserID = req.params.id;
    let result = await EditUsers(UserID);
    res.render('Delete.ejs', {ID: result});
}

const postDeleteteUser = async (req, res) => {
    let {UserID} = req.body;
    await DeleteUsers(UserID);
    res.redirect('/');
}

module.exports = {
    getHomePage, postCreateUser, CreateUserPage, 
    UpdateUserPage, postUpdateUser, DeleteUserPage, 
    postDeleteteUser
}