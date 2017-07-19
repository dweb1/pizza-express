const express = require('express');

const router = express.Router();

router.get('/:choice', function(req, res){
    let choice = req.params.choice;
	res.send(`${choice} pizza! Good choice.`);
});

module.exports = router;