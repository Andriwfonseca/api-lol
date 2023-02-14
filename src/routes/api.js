const ApiController = require('../controllers/api.controller');
const router = require('express').Router();

router.get('/jogador/:summonerName', ApiController.summonerName);
router.get('/maestrias/:summonerName', ApiController.championMasteries);
router.get('/partidas/:summonerName', ApiController.matches);
router.get('/partida/:matchId', ApiController.match);

module.exports = router;