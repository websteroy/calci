var express = require('express');
var app = express();

app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Calci running on port '+ port + '!');
});