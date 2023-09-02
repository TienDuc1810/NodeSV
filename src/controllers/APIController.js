const connection = require('../config/database')

const GetAPIUser = async (req, res) =>{
    const [results, fields] = await connection.query('select * from Users');
    return res.status(200).json({
        message: 'success',
        data: results
    })
}
const CreateAPIUser = async (req, res) =>{
    let { email, name, city } = req.body;
    if(!email || !name || !city){
    return  res.status(200).json({
            message: 'wrong',
        })
    }
    let [results, fields] = await connection.query(`INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, name, city]);
    return res.status(200).json({
        message: 'success',
        data: results
    })
}
const UpdateAPIUser = async (req, res) =>{
    let { email, name, city, UserID } = req.body;
    if(!email || !name || !city || !UserID){
        return  res.status(200).json({
                message: 'wrong',
            })
        }
        let [results, fields] = await connection.query(
            `
            UPDATE Users 
            SET email = ?, name= ?, city=?
            WHERE id = ?
            `,[email, name, city, UserID]
            );
        return res.status(200).json({
        message: 'success',
        data: results
    })
}
const DeleteteAPIUser = async (req, res) =>{
    let {UserID} = req.body;
    if(!UserID){
        return  res.status(200).json({
                message: 'wrong',
            })
        }
    let [results, fields] = await connection.query(
        `
        DELETE FROM Users WHERE id=?
        `
        ,[UserID]
        );
    return res.status(200).json({
        message: 'success',
        data: results
    })
}

module.exports = {
    GetAPIUser, CreateAPIUser,
    UpdateAPIUser, DeleteteAPIUser
}