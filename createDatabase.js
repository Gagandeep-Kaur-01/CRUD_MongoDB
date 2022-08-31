var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function(error, database)
{
    //use to connect to the databases
    if(error){
        throw error;
    }
    //use to create database
    var dbobject = database.db('myDatabase');
    console.log("database is created")
    database.close();
})