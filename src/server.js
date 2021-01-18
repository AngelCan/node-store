'use strict'
require('dotenv').config()
const app = require('./app')
const conectDb = require('./mongodb')
const {appConfig, dbConfig} = require('./config')

/*
conectDb(dbConfig)

app.listen(appConfig.port, ()=>{
    console.log(`server running on ${appConfig.host}:${appConfig.port}`)
})
*/
async function init(appConfig, dbConfig){

    try {
        await conectDb(dbConfig)
        app.listen(appConfig.port, ()=>{
            console.log(`server running on ${appConfig.host}:${appConfig.port}`)
        })
    } catch (error) {
        throw error
    }
}

init(appConfig, dbConfig)