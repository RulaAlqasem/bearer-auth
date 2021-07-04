'use srtict';

const express = require('express');
const router = express.Router();
const Users = require('./models/users-model')
const basicAuth = require('./middleware/basicAuth');
const bcrypt = require('bcrypt');



router.post('/signin', basicAuth, (req, res) => {

  res.status(200).json(req.body.user);

});
router.post('/signup', async (req, res) => {

  try {
    if (req.body.password === '') res.status(403).json("Error Creating User");
    req.body.password = await bcrypt.hash(req.body.password, 7);
    const user = new Users(req.body);
    const record = await user.save(req.body);
    res.status(201).json(record);
  } catch (e) { res.status(403).json("Error Creating User"); }

});

module.exports = router;