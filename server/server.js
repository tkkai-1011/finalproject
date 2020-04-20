let express = require('express');
app = express(),
    port = process.env.PORT ||3000,
    mongoose = require('mongoose'),
    bodyParsser = require('body-parser');



mongoose.connect('mongodb://localhost:27017/event', {});

mongoose.Promise = global.Promise;

app.use(bodyParsser.urlencoded({
    extended: true
}));

app.use(bodyParsser.json());

//Enabling CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "*");
    next();
});

const routes = require('./app/app');
routes(app);
// const initApp = require('./app/app');
// initApp(app);

app.listen(port);
console.log('Order RESTful API server started on: ' + port);
