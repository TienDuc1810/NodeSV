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

module.exports = {
    GetAllUsers, EditUsers
}