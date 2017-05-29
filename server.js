/*
 * LoginSample - Just a simple login example with plain old Node.js
 *
 */
var http = require('http'),
    fs = require('fs'),
    MongoClient = require('mongodb').MongoClient,
    views = require('./views.js'),
    mUrl = "mongodb://127.0.0.1:27017/logintest";
var server = http.createServer(function(q,s){
    if(q.method === "GET"){
        routeGet(q,s);
    }
    if(q.method === "POST"){
        routePost(q,s);
    }
}).listen(8080);
console.log("Server running on 127.0.0.1 on port 8080"); //let the admin know the server is running

function routeGet(req,res){
    if(req.url === "/"){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(views.header());
        res.write(views.jumboStart);
        res.write(views.login());
        res.write(views.jumboEnd);
        res.end(views.footer());
    }
    if(req.url.indexOf('.js') != -1){
        fs.readFile(__dirname + '/view/js' + req.url, function(err, d){
            if(err) console.log(err);
            res.writeHead(200, {'Content-Type':'text/javascript'});
            res.end(d);
        });
    }
    if(req.url.indexOf('.html') != -1){
    fs.readFile(__dirname + 'view' + req.url, function(err, d){
            if(err) console.log(err);
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(d);
        });
    }
    if(req.url.indexOf('.css') != -1){
    fs.readFile(__dirname + 'view/css' + req.url, function(err, d){
            if(err) console.log(err);
            res.writeHead(200, {'Content-Type':'text/css'});
            res.end(d);
        });
    }
}

function toAssoc(dataString){
    var container = dataString.split('&');
    var output = [];
    for(var i = 0; i < container.length; i++){
        output[container[i].split('=')[0]] = container[i].split('=')[1];
    }
    return output;
}

function routePost(req, res){
    var data = ''; // best to declare this at the top of the function
    //allows for extention of the function in the future
    if(req.url === '/login'){
        req.on('data', function(chunk){
            data += chunk;
        });
        req.on('end', function(){
            var holder = toAssoc(data); //make the data useable
            MongoClient.connect(mUrl, function(err, db){
                db.collection('users').findOne({'username':holder['username'], 'password':holder['password']} , function(err, item){
                    res.writeHead(200, {'Content-Type':'text/html'});
                    if(item != null){
                        res.write(views.header());
                        res.write(views.jumboStart);
                        res.write(views.success);
                        res.write(views.jumboEnd);
                        res.end(views.footer());
                    }
                    else{
                        res.write(views.header());
                        res.write(views.jumboStart);
                        res.write(views.failure);
                        res.write(views.jumboEnd);
                        res.end(views.footer());
                    }
                });
            });
        });
    }
}