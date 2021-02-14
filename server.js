
const express = require("express");
const app = express();
const port = 8000;

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('/static', express.static("static"));

app.use(express.json() );
app.use(express.urlencoded({extended:true})); 

app.get('/', function (req, res){
  res.render('index');
});

app.post('/result', function(req, res){
  const information = req.body;
  console.log(information);
  res.render('result', { 
    name: req.body.name, 
    ubication: req.body.ubication, 
    language: req.body.language, 
    comment: req.body.comment
  });
});

 app.get('/result', function(req, res){
}); 

app.listen( port, () => console.log(`Listening on port: ${port}`) );