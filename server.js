7//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'public/')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index.html'));
});
app.get('/index.html', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index.html'));
});
app.get('/index2.html', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index2.html'));
});
app.get('/index3.html', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index3.html'));
});
app.get('/index4.html', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index4.html'));
});
app.get('/index5.html', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index5.html'));
});
app.get('/index6.html', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index6.html'));
});
app.get('/google2fb0676a13153cb4.html', function(req, res){
  res.sendFile(path.join(__dirname, 'views/google2fb0676a13153cb4.html'));
});
app.get('/sitemap.xml', function(req, res){
  res.sendFile(path.join(__dirname, 'views/sitemap.xml'));
});


//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});