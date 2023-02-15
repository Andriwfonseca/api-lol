const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const cors = require('cors');
const exphbs  = require('express-handlebars');
const apiRoutes = require('./routes/api');
const viewRoutes = require('./routes/views');

const server = express();

server.use(cors());

server.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "template"}));
server.set('view engine', 'hbs');
server.set('views', path.join(__dirname, '/views'));

server.use(apiRoutes);
server.use(viewRoutes);

server.use((req, res) =>{
    res.status(404);
    res.json({error: 'Endpoint não encontrado.'});
});

server.listen(process.env.PORT, 
    () => console.log(`Servidor iniciado! http://localhost:${process.env.PORT}/`));