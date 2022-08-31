var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/"

MongoClient.connect(url, function(error, database){
    if(error){
        throw error;
    }
    var dbase = database.db("myDatabase");
    dbase.createCollection("user", function(error, response){
        if(error){
            throw error;
        }
        console.log("collection is created........")
        database.close();
    });
});