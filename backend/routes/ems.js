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

router.get("/display",(req,res)=>{
    dbConnection.collection("employee").find({}).toArray((err,data)=>{
        if(err){
            console.log("Cannot fetch employee..");
        }
        else{
            res.send(data)
        }
    })
})

router.post("/add",(req,res)=>{
    dbConnection.collection("employee").find({empid:req.body.empid}).toArray((err,data)=>{
        if(err){
            console.log("Cannot add employee");
        }
        else{
            dbConnection.collection("employee").insertOne({...req.body})
            res.send("Inserted employee...")
        }
    })
})

module.exports = router