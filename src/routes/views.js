const ViewController = require('../controllers/view.controller');
const router = require('express').Router();

router.get('/home', ViewController.home);

module.exports = router;