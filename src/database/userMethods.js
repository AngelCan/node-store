const User = require('../models/user')

const getUserOnDB = async(filters, next)=>{
    try {
        const userList = await User.find(filters,{password: false}, (err, usrList)=>{
            if(err) throw err
            return usrList
        })
        return userList
    } catch (error) {
        console.log(error)
        next(error)
    }
}

module.exports = {
    getUserOnDB
}