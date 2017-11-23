var express = require('express');

var app = express();



app.disable('x-powered-by'); // improves security by hiding info from the header

var handlebars = require('express-handlebars').create({defaultLayout:'main'}); // set default layout to main.handlebars

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static('meet-me-halfway' + '/public')); //lets you reference public folder/imgaes

app.get('/', function(req, res){
  require('./business_logic/index.js').initializeProject();
  console.log(process.env.OLLIE)
  res.render('home');  //renders home.handlebars
});

app.listen(app.get('port'), function() {   // defines what port we listne to
  console.log('Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate');
});
