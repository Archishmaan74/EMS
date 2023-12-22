let express = require('express')
let router = express.Router()
let mongo = require('mongodb')
let dbClient = mongo.MongoClient
let dbUrl = "mongodb://127.0.0.1:27017"
let dbName = "EMS"

dbClient.connect(dbUrl,(err,connection)=>{
    if(err){
        console.log("Cannot connect database...");
    }
    else{
        dbConnection = connection.db(dbName)
        console.log("Database connected...");
    }
})

module.exports = router