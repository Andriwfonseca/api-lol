const axios = require("axios");

const URL = process.env.URL;

exports.home = async (req, res) => {
    try {
        const response = await axios.get(URL + '/api/jogador/Mr%20Fonseca');
        const data = response.data;
        res.render('home', { data: data });
      } catch (error) {
        console.error(error);
      }
};

exports.jogador = async (req, res) => {
    try {
        const summonerName = req.params.summonerName;
        const response = await axios.get(URL + '/api/jogador/' + summonerName);
        const data = response.data;
        res.render('jogador', { data: data });
    } catch (error) {
        console.error(error);
    }
};

exports.maestrias = async (req, res) => {
    try {
        const summonerName = req.params.summonerName;
        const response = await axios.get(URL + '/api/maestrias/' + summonerName);
        const data = response.data;
        res.render('maestrias', { data: data });
    } catch (error) {
        console.error(error);        
    }
}