const connection = require('../config/database');

const GetAllUsers = async () => {
    const [results, fields] = await connection.query('select * from Users');
    return results;
}

const EditUsers = async (UserID) => {
    let [results, fields] = await connection.query('select * from Users where id = ?', [UserID] );
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}

const UpdateUsers = async (email, name, city, UserID) => {
    let [results, fields] = await connection.query(
        `
        UPDATE Users 
        SET email = ?, name= ?, city=?
        WHERE id = ?
        `,[email, name, city, UserID]
        );
}

const DeleteUsers = async (UserID) => {
    let [results, fields] = await connection.query(
        `
        DELETE FROM Users WHERE id=?
        `
        ,[UserID]
        );
}

module.exports = {
    GetAllUsers, EditUsers, UpdateUsers, DeleteUsers
}