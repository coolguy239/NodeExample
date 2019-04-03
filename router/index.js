/**
 * http://usejsdoc.org/
 */
var express = require('express');
var router = express.Router();

//var main = require('./main/main'); 

router.get('/', function(req, res){
    console.log('router > index');
    res.send('router > index');
});

//router.use('/main', main);

module.exports = router;