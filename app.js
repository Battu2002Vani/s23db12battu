var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
const connectionString =process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});
var books = require("./models/books");
// We can seed the collection if needed onserver start
async function recreateDB(){
// Delete everything
await books.deleteMany();

let instance1 = new
books({name:"REVOLUTION 2023", author:'Chetan Bhagath',cost:15.4});
instance1.save().then(doc=>{
console.log("First object saved")}
).catch(err=>{
console.error(err)
});
}
// Adding instance2
let instance2 = new books({name:"THE LAST DICKENS", author:'MATHHEW PEARL',cost:19.6}
  );
instance2.save().then(doc => {
  console.log("Second object saved");
}).catch(err => {
  console.error(err);
})

let instance3 = new books({
  name:"THE POSE SHADOW", author:'MICHAEL PALIN',cost:21.0}
);

instance3.save().then(doc => {
  console.log("Third object saved");
}).catch(err => {
  console.error(err);
})

let instance4 = new books({
  name:"WHAT IS IN ROOM 201", author:'CHETHAN BHAGATH',cost:17.0}
);

instance4.save().then(doc => {
  console.log("fourth object saved");
}).catch(err => {
  console.error(err);
})

let instance5 = new books({
  name:"THE DREAM OF SCIOPIO", author:'PETER WEISS',cost:21.0}
);

instance5.save().then(doc => {
  console.log("fifth object saved");
}).catch(err => {
  console.error(err);
})

let reseed = true;
if (reseed) {
recreateDB();
}
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var BooksRouter = require('./routes/Books');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var resourceRouter =require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Books', BooksRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);
app.use('/resource', resourceRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
