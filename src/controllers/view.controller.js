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
        const masterys = response.data;

        const masterysArray = Object.values(masterys).map(mastery => [mastery]);

        const fs = require('fs');

        fs.readFile('src/data/champions.json', 'utf8', (err, json) => {
            if (err) throw err;    
            const champions = JSON.parse(json);  

            const data = [];
        
            for(let i=0;i<masterysArray.length;i++){            
                if(masterysArray[i][0].championId){
                    const champ = champions.find((champ)=> masterysArray[i][0].championId == champ[0].key); 
                    
                    if(champ && champ[0]){
                        const championMasteries = {
                            champion: champ[0],
                            mastery: masterysArray[i][0]
                        }                    
                        data.push(
                            championMasteries
                        )
                    }                
                }            
            }

            res.render('maestrias', { data: data });        
        });
    } catch (error) {
        console.error(error);        
    }
}
    
