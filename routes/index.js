const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.use(express.static('public'));
// router.use(express.static('public'), function (req, res) {
//   res.sendFile('../public/stylesheets/style.css');
//   // res.static('../public/stylesheets/style.css');
// })

module.exports = router;
