var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    // res.send('INDEX PAGE');
    res.render('tasklist/index.html');
});

module.exports = router;