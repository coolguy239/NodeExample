/**
 * http://usejsdoc.org/
 */
var express = require('express');
var router = express.Router();

router.get('/success', function(req, res){
	res.send('SUCCESS');
});

router.get('/fail', function(req, res){
	res.send('FAIL');
});

//router.use('/main', main);

module.exports = router;