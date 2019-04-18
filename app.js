/**
 * http://usejsdoc.org/
 */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var fs = require('fs');
var passport = require('passport');

var router = require('./router/index');


app.listen(5000, function(){
     console.log("start!! express server on port 5000");
});

//app.use(logger("combined"));
app.use(logger({
	format:"combined",
	stream: fs.createWriteStream('app.log', {'flags': 'w'})
}));

app.use(passport.initialize());

app.use(router);
