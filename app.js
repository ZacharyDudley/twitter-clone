const express = require('express');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const app = express();

// nunjucks.configure('./views/');
// nunjucks.render('index.html',  {
//   if (err) throw err;
//   console.log(output);
// });

const people = [ { name: 'Zachary' }, { name: 'Jesse' }, { name: 'Max' }];

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

app.use(morgan('dev'));

app.use('/special', function (req, res, next) {
  console.log(req.method, req.url, 'Special Area');
  res.send('Not 404');
  next();
})

app.get('/', function (req, res) {
  res.render('index', {title: 'TEMPLATE', people: people} );
});

app.listen(3000, function () {
  console.log('Listening.');
});
