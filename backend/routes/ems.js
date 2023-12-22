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

router.get("/dispone/:sno",(req,res)=>{
    dbConnection.collection("employee").find({sno:parseInt(req.params.sno)}).toArray((err,data)=>{
        if(err){
            console.log("Cannot fetch single employee...");
        }
        else{
            res.send(data[0])
            console.log("Fetching one...");
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

router.post("/edit",(req,res)=>{
    dbConnection.collection("employee").find({sno:req.body.sno}).toArray((err,data)=>{
        if(err){
            console.log("Cannot fetch data to edit...");
        }
        else{
            if(data.length > 0){
                let {_id,...rest}=req.body
                dbConnection.collection("employee").updateOne({sno:req.body.sno},{$set: {...rest}})
                res.send("Edited details of employee...")
            }
            else{
                console.log("Cannot edit...");
            }
        }
    })
})

router.post("/delete",(req,res)=>{
    dbConnection.collection("employee").find({sno:req.body.sno}).toArray((err,data)=>{
        if(err){
            console.log("Cannot fetch to delete...");
        }
        else{
            dbConnection.collection("employee").deleteOne({sno:req.body.sno})
            res.send("Employee details deleted...")
        }
    })
})

module.exports = router