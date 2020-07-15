const express = require('express');
const router = express.Router();

const routes = require('./controller');

router.post('/upload', routes.movieUpload);

module.exports = router;
