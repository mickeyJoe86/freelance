var  express = require("express");
var app = express();

app.use(express.static(__dirname + '/src'));

app.get('*', function(req,res) {
    res.sendFile(__dirname + '/index.html');
});

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('App is running on port', app.get('port'));
});