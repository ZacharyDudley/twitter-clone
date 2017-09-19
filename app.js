const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const morgan = require('morgan');
const routes = require('./routes');

app.use(morgan('dev'));

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {
  noCache: true
});

app.use('/', routes);


app.listen(3000, function () {
  console.log('Listening.');
});
