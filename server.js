var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var index = require('./routes/index');

var port = process.env.PORT;
var app = express();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set static folder
app.use(express.static(path.join(__dirname, 'client')));

// Routes
app.use('/', index);

app.listen(port, () => console.log('Server started on port ' + port));