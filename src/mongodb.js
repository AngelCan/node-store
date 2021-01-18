const mongoose = require('mongoose')

mongoose.connection.on('open', ()=> console.log('mongodb is conected'))


async function connectDb({host, port, dbName}){
    const uri = `mongodb://${host}:${port}/${dbName}`
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology:true})
}

module.exports = connectDb