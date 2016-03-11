// Survey exercise
// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// require body-parser
var bodyParser = require('body-parser');
// create the express app
var app = express();
// use it!
app.use(bodyParser.urlencoded());
// // static content
// app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the survey.ejs view
app.get('/', function(req, res) {
 res.render('survey', {title: "my Survey project"});
});
// app.get('/result', function(req, res) {
// res.render('result', {title: "my Survey Results"});
// });
// post route for adding a student
app.post('/result', function(req, res) {
 console.log("POST DATA", req.body);
 fromBody = {
     name :     req.body.name,
     location :  req.body.location,
     language :  req.body.language,
     comment :   req.body.comment
 };
 console.log("fromBody =" + JSON.stringify(fromBody));
 // Then redirect to the result route
 // res.render('result', {name: "test"}); //need an id?
 res.render('result', {postdata: req.body}); //need an id?
});
// tell the express app to listen on port 8000
app.listen(8001, function() {
 console.log("listening on port 8001");
});
