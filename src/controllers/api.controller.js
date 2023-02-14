const axios = require("axios");

//jogador
exports.summonerName = async (req, res) => {    
    const { summonerName } = req.params;
    const endPoint = `/lol/summoner/v4/summoners/by-name/${encodeURI(summonerName)}`;
    const headers = { "X-Riot-Token": process.env.API_KEY };

    const summonerResponse = await axios.get(process.env.LOL_URL + endPoint, { headers })
    .catch((e) => res.json(e));

    if(summonerResponse.data){
        const summoner = summonerResponse.data;
        
        res.json(summoner);        
    }
}

//maestrias
exports.championMasteries = async (req, res) => {    
    const { summonerName } = req.params;
    const endPoint = `/lol/summoner/v4/summoners/by-name/${encodeURI(summonerName)}`;
    const headers = { "X-Riot-Token": process.env.API_KEY };

    const summonerResponse = await axios.get(process.env.LOL_URL + endPoint, { headers })
    .catch((e) => res.json(e));

    if(summonerResponse.data){
        const summoner = summonerResponse.data;
        const newEndPoint = `/lol/champion-mastery/v4/champion-masteries/by-summoner/${summoner.id}`;

        const championMasteriesResponse = await axios.get(process.env.LOL_URL + newEndPoint, { headers })
        .catch((e) => res.json(e));
        
        if(championMasteriesResponse.data){
            const championMasteries = championMasteriesResponse.data;
            res.json(championMasteries);
        }
    }
}

//matches
exports.matches = async (req, res) => {    
    const { summonerName } = req.params;
    const endPoint = `/lol/summoner/v4/summoners/by-name/${encodeURI(summonerName)}`;
    const headers = { "X-Riot-Token": process.env.API_KEY };

    const summonerResponse = await axios.get(process.env.LOL_URL + endPoint, { headers })
    .catch((e) => res.json(e));

    if(summonerResponse.data){
        const summoner = summonerResponse.data;
        const newEndPoint = `/lol/match/v5/matches/by-puuid/${summoner.puuid}/ids?start=0&count=20`;

        const matchesResponse = await axios.get(process.env.LOL_URL2 + newEndPoint, { headers })
        .catch((e) => res.json(e));
        
        if(matchesResponse.data){
            const matches = matchesResponse.data;
            res.json(matches);
        }
    }
}

//match
exports.match = async (req, res) => {    
    const { matchId } = req.params;
    const endPoint = `/lol/match/v5/matches/${matchId}`;
    const headers = { "X-Riot-Token": process.env.API_KEY };

    const matchResponse = await axios.get(process.env.LOL_URL2 + endPoint, { headers })
    .catch((e) => res.json(e));
    
    if(matchResponse.data){
        const match = matchResponse.data;
        res.json(match);
    }
    
}
