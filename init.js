/*
 * init.js - the script to setup the database so testing of the login sample
 */
var MongoClient = require('mongodb').MongoClient,
    mUrl = "mongodb://127.0.0.1:27017/logintest";
MongoClient.connect(mUrl, function(err, db){//connect so our database is created
    db.createCollection('users', function(err, result){//create the collection 'users'
        if(err) console.log(err);
    });
});
//go back in to add a record in the collection to test against
MongoClient.connect(mUrl, function(err, db){
    db.collection('users').insertOne({'username':'admin', 'password':'admin'}, function(err, item){
        db.close();//admin, admin is a good username, and password combination, right?
    });
});