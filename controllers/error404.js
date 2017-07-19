const express = require('express');

const router = express.Router();

router.get('/', function(req, res){
    res.render('error404', {
    	data: `Error 404`,
    });
});

module.exports = router;
