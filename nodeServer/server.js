var express  = require('express');
var router = express.Router();
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('USER CONNECTED');
  socket.on('disconnect', function(){
    console.log('USER DISCONNECTED');
  });

  socket.on('add-message', (message) => {
    io.emit('message', {type:'new-message', text: message});
  });
});


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')));
// app.use(express.static('../src'));

//var admin = express();

app.get('/restTest', function(req, res){
  console.log("Rest Test");
  res.json("Rest Test"); 
});

app.all('/*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(1337);
console.log("App listening on port 1337", __dirname);
console.log("App listening on port 1337");
