var express = require('express');
var app = express();

app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 6666;
app.listen(port, function () {
  console.log('Calci running on port '+ port + '!');
});