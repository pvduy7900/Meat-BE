var createError = require('http-errors');
var express = require('express'); // thêm vào
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose"); // thêm vào

require("dotenv").config({ path: ".env" }); //thêm vào


var indexRouter = require('./routes/index');

const usersRouter = require('./routes/users');
const categoryRouter = require("./routes/category")
const productRouter = require("./routes/product");
// const reviewsRouter = require("./routes/reviews"); // gắn link với sever
// const tagsRouter = require("./routes/tags");


var app = express();
var cors = require("cors");

app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(usersRouter); // helloooooooo, this one must be change, nhìn phía trên sẽ thấy
// app.use(reviewsRouter); // tương tự nè
app.use(productRouter);
app.use(categoryRouter);


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

app.listen(5000, () => console.log(`example app`));
mongoose
	.connect("mongodb://localhost:27017", {
		useCreateIndex: true,
		useNewUrlParser: true,
		useFindAndModify: false,
		useUnifiedTopology: true
	})
	.then(() => console.log("connected to database"));

module.exports = app;
