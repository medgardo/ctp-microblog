const express = require('express');
const models = require('../models');
const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/:userID', (req, res) => {
});

module.exports = router;
