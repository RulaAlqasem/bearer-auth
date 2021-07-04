'use strict';

const express = require('express');
const router = require('./auth/router');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.post('/signin', router)
app.post('/signup', router)


function start(port) {
  app.listen(port, () => {
    console.log(`listening in  port ${port}`)
  })
}

module.exports = {
  start, app
}



