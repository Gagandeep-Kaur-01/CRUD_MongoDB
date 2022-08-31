var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function(err, database){
    if(err){
        throw err;
    }

    var dbase = database.db("myDatabase");
    

    dbase.collection("user").findOne(
        { name: "A" }, 
        function(error, response){
        if(error){
            throw error;
        }

        console.log("fetch one record:- ", response);
        database.close();
    })
})