const jwt = require('jsonwebtoken')
const { SECRET } = process.env
const verifyToken = (req, res, next) =>{
    let token = req.headers["x-access-token"]

    if(!token){
        return res.status(403).send({message: 'No token providend!'})
    }
    jwt.verify(token, SECRET, (err, decoded)=>{
        if(err){ return res.status(401).send({message: 'Unauthorized!'})}
        console.log(decoded)
        next()
    })
}

module.exports = verifyToken