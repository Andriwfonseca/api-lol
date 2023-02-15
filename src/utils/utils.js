(function (){
    changeObjectNameJson();
})();

function changeObjectNameJson(){
    const fs = require('fs');

    fs.readFile('src/data/data-champions.json', 'utf8', (err, json) => {
      if (err) throw err;
    
      const {data} = JSON.parse(json);  
    
      const championsByKey = {};
    
      for (const championName in data) {
        const champion = data[championName];
        const key = champion.key;
        championsByKey[key] = champion;
      }
    
      fs.writeFile('src/data/champions.json', JSON.stringify(championsByKey, null, 2), err => {
        if (err) throw err;
        console.log('Arquivo modificado salvo!');
      });
    });
}