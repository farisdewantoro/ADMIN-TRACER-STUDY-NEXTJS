
const async = require('async');
const db = require('../../config/conn');

const login = (req,res)=>{
    return res.status(200).json('ok');
}

module.exports={
    login
}