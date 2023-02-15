const ViewController = require('../controllers/view.controller');
const router = require('express').Router();

router.get('/home', ViewController.home);
router.get('/jogador/:summonerName', ViewController.jogador);
router.get('/maestrias/:summonerName', ViewController.maestrias);

module.exports = router;