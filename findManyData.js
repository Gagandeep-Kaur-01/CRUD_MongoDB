var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function(err, database){
    if(err){
        throw err;
    }

    var dbase = database.db("myDatabase");
    

    // dbase.collection("user").find({}).toArray(
    //     function(error, result) {
    //         if(error){
    //             throw error;
    //         };

    //         for(i = 0; i < result.length; i++) {
    //             let user = result[i];
    //             console.log("-----result----", result[i]._id, result[i].name)
    //         }

    //         database.close();

    //     }
    // )

    dbase.collection("user").find().toArray(
        function(error, response){
        if(error){
            throw error;
        }

        console.log("fetch all records:- ", response);
        database.close();
    })
})