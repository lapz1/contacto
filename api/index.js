const express = require('express');
const router = express.Router();

const messages = require('./controllers/messages');
const logger = require('./middleware/logger');

router.use(logger);
router.use('/messages',messages)

module.exports = router;