var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

/*
app.get('/', function(req, res) {
    res.send('hello world');
});
*/

var sample = require('./sample');
app.use(sample);

var postreRouter = require('./postgreRouter');
app.use(postreRouter);


app.use(handleError);

app.listen(3000);

function handleError(err , req, res, next){
    res.status(err.code).send({msg:err.message});
}
