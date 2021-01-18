const {getUserOnDB} = require('../database/userMethods')

const verifySingUp = async(req, res, next) =>{
    try {
        let userDuplicated = await getUserOnDB({userName: req.body.userName}, next)
        console.log(req.body.email)
        let emailDuplicated = await getUserOnDB({email: req.body.email}, next)
        if(userDuplicated.length > 0){
            res.status(400).send({message: 'Failed this username is alredy in use'})
            return;
        }
        if(emailDuplicated.length > 0){
            res.status(400).send({message: 'Failed this email is alredy in use'})
            return
        }
        next()
    } catch (error) {
        next(error)
    }
}
module.exports = verifySingUp