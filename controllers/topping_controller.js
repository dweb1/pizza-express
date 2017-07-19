const express = require('express');

const router = express.Router();

router.get('/:choice', function(req, res){
    let choice = req.params.choice;
	res.render('toppings', {
		data: `${choice} pizza! Good choice.`
	});
});

module.exports = router;