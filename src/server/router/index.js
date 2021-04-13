const express = require('express');

const category = require('./advertisement');
const { errorHandler } = require('../handlers');

const router = express.Router();

router.use(category);
router.use(errorHandler);

module.exports = router;
