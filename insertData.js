var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function(err, database){
    if(err){
        throw err;
    }

    var dbase = database.db("myDatabase");
    var databaseCollection = dbase.collection("user");
    var data = {
        _id: 01,
        name: "Abc",
        address: "B-222, Sector-19, Noida"
    };

    databaseCollection.insertOne(data, function(error, response){
        if(error){
            throw error;
        }

        console.log("1 document inserted...");
        database.close();
    })
})