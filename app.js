const express = require('express');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const app = express();

nunjucks.configure('./views/index.html');
nunjucks.render('./views/index.html', { name: 'Zachary' });

app.use(morgan('dev'));

app.use('/special', function (req, res, next) {
  console.log(req.method, req.url, 'Special Area');
  res.send('Not 404');
  next();
})

app.get('/', function (req, res) {
  res.send('Nothing here.');
});

app.listen(3000, function () {
  console.log('Listening.');
});
