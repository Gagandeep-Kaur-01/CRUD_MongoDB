var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function(err, database){
    if(err){
        throw err;
    }

    var dbase = database.db("myDatabase");

    var whereClause = { };    

    dbase.collection("user").deleteMany(
        whereClause,
        function(error, response){
        if(error){
            throw error;
        }

        console.log("deletedValue:- ", response);
        database.close();
    })
})