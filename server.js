'use strict';

const express = require('express');
const app = express();
  //I added
const bodyParser = require('body-parser');

app.use(express.static('./public'));

app.use(bodyParser.json());

const users = require('./routes/users');

app.use('/users', users);

const port = process.env.PORT || 3000;


app.use((err, _req, res, _next) => {              //I added
  if (err.status) {
    
    return res.status(err.status).send(err);
  }

  console.error(err);
  res.sendStatus(500);
});


app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
