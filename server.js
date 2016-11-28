var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var tasklist = {
    index: require('./routes/tasklist/index'),
    tasks: require('./routes/tasklist/tasks')
}

var ibv = {
    index: require('./routes/ibv/index'),
    api: require('./routes/ibv/api')
}

var port = 3000;

var app = express();

//View engine
app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

//Body Parser middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);

//url will be /api/....
app.use('/myapp/tasklist', tasklist.index);
app.use('/myapp/tasklist/api', tasklist.tasks);

app.use('/myapp/ibv', ibv.index);
app.use('/myapp/ibv/api', ibv.api);

app.listen(port, function(){
    console.log("Server started on port " +  port);
});