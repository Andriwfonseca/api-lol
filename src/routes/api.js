const ApiController = require('../controllers/api.controller');
const router = require('express').Router();

router.get('/api/jogador/:summonerName', ApiController.summonerName);
router.get('/api/maestrias/:summonerName', ApiController.championMasteries);
router.get('/api/partidas/:summonerName', ApiController.matches);
router.get('/api/partida/:matchId', ApiController.match);

module.exports = router;