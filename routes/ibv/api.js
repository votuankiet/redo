var express = require('express');
var router = express.Router();

router.get('/resources/mapping-ex', function(req, res, next){
    // res.send('INDEX PAGE');
    var resources = {
       
    }
    res.json(resources);
});

module.exports = router;