(function (){
    transformJsonToArray();
})();

function transformJsonToArray(){
    const fs = require('fs');

    fs.readFile('src/data/data-champions.json', 'utf8', (err, json) => {
      if (err) throw err;
    
      const {data} = JSON.parse(json);  
    
      const champions = Object.values(data).map(champion => [champion]);  
          
      fs.writeFile('src/data/champions.json', JSON.stringify(champions, null, 2), err => {
        if (err) throw err;
        console.log('Arquivo modificado salvo!');
      });
    });
}