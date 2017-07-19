const express = require('express');
const hbs = require('hbs');

const app = express();
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static(__dirname + '/public'));

const indexController = require('./controllers/index.js');
app.use('/', indexController);

const toppingController = require('./controllers/topping_controller.js');
app.use('/topping', toppingController);

const orderController = require('./controllers/order_controller.js');
app.use('/order', orderController);

const errorController = require('./controllers/error404.js');
app.use('*', errorController);

const port = 3000;
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});