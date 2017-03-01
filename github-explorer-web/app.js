(function(){

var path = require('path');
var express = require('express');
var app = express();
require('jquery');

var port = 3000;

app.use(express.static(path.join(__dirname, 'node_modules')));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(port, function(){
    console.log('listerning on port : ' + port);
});

})();