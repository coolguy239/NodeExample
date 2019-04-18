/**
 * http://usejsdoc.org/
 */
var express = require('express');
var router = express.Router();

//var main = require('./main/main'); 
var authGoogle = require('./auth/google/index');
var auth = require('./auth/index');

router.get('/', function(req, res){
    console.log('router > index3');
    res.send('router > index3');
});

//router.use('/main', main);
router.use('/auth/google', authGoogle);
router.use('/auth', auth);

module.exports = router;