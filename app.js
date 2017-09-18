const express = require('express');
const app = express();



app.get('/', function (req, res) {
  console.log(req.method, req.url);
  res.send('Nothing here.');
});

app.listen(3000, function () {
  console.log('Listening.');
});
