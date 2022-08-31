var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function(err, database){
    if(err){
        throw err;
    }

    var dbase = database.db("myDatabase");

    var whereClause = { name: /Abc/};
    var newValue = { $set: {name: "G"} };
    

    dbase.collection("user").updateOne(
        whereClause, newValue, 
        function(error, response){
        if(error){
            throw error;
        }

        console.log("updatedValue:- ", response);
        database.close();
    })
})