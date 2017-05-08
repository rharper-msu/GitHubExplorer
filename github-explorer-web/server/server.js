(function(){

    var express = require('express');

    var application = express();

    application.get('/', function(request, response){
        response.render('banks');
    });

    var port = 3000;

    var server = application.listen(port, function(){
        console.log('listening on port ' + port);
    });

})();