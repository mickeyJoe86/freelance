var  express     = require("express"),
     nodemailer  = require("nodemailer"), 
     bodyParser  = require("body-parser"),
     transporter = nodemailer.createTransport(smtpConfig);
     
var smtpConfig = {
    host: 'smtp.zoho.com',
    port: 465, 
    secure: true,
    auth: {
        user: process.env.USERMAIL,
        pass: process.env.USERPASS
    }
}  
   
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static(__dirname + '/src'));


//**** Routes ****
app.get('/', function(req,res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/contact', function(req, res){
  var data = req.body;
  console.log("From: " + data.email)
  transporter.sendMail({
    from: data.name + '<' + data.email + '>',
    to: process.env.USERMAIL,
    subject: 'CONTACT: From Compiler-Lab',
    text: data.formBody
    
  }, function(){
    console.log("-----success-----");
    res.send({ redirect: '/' });
  });
  
});

app.listen(app.get('port'), function() {
  console.log('App is running on port', app.get('port'));
});