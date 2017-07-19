const express = require('express');
const hbs = require('hbs');

const app = express();
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
	res.send("Welcome to Pizza Express!")
})

app.get("/topping/:choice", (req, res) => {
	let choice = req.params.choice;
	res.send(`${choice} pizza! Good choice.`);
})

 app.get('/order/:amount/:size', (req, res) => {
 	let amount = req.params.amount;
 	let size = req.params.size;
    res.send(`Your order for ${amount} ${size} pizzas will be ready in 1 minute!`);
 });

const port    = 3000;
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});