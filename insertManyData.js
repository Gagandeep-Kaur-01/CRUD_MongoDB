var mongodb = require('mongodb');  
var MongoClient = mongodb.MongoClient;  
var url = 'mongodb://localhost:27017/';  

MongoClient.connect(url,function(error,database){  
    if(error){  
        throw error;  
          
    }  
    var dbase = database.db("myDatabase");  
    var data = [  
    {_id:11, name:"A" , address: "Harvansh nagar Ghaziabad"},  
    {_id:12, name:"B" , address: "Harvansh nagar Ghaziabad"},  
    {_id:13, name:"C" , address: "Harvansh nagar Ghaziabad"},  
    {_id:14, name:"D" , address: "Harvansh nagar Ghaziabad"},  
    {_id:15, name:"E" , address: "Harvansh nagar Ghaziabad"},  
    {_id:16, name:"F" , address: "Harvansh nagar Ghaziabad"}  
  ]  
dbase.collection('user').insertMany(data , function(error, response){  
    if(error){  
        throw error;  
      
    }  
    console.log("Numnber of document is inserted.........", response);  
})  
})  