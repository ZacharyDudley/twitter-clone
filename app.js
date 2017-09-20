const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const morgan = require('morgan');
const routes = require('./routes');
const socketio = require('socket.io');

app.use(morgan('dev'));

let server = app.listen(3000);
let io = socketio.listen(server);
app.use('/', routes(io));

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {
  noCache: true
});

// app.listen(3000, function () {
//   console.log('Listening.');
// });

