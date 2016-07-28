'use strict';

var express = require('express');
var app     = express();

app
  // set template engine will used in express app
  .set('view engine', 'pug')
  // set express app Routes
  .get('/', function(req, res) {
    res.render('index', {
      palette : ["#cc7790", "#ff5512", "#75d709"]
    });
  })
  // set port will server listen
  .listen(9000);
