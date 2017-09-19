const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');
const body_parser = require('body-parser');
router.use(body_parser.urlencoded({ extended: false}));
router.use(body_parser.json());
router.use(express.static('public'));

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true });
});


router.get('/users/:name', function (req, res) {
  let name = req.params.name;
  let list = tweetBank.find( {name: name});
  res.render('index', {tweets: list, showForm: true, person: name});
});

router.post('/tweets', function (req, res){
  let name = req.body.name;
  let text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

module.exports = router;
