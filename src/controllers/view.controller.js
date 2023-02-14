const axios = require("axios");

exports.home = async (req, res) => {
    res.render('home', { title: 'Handlebars Tutorial', message: 'Welcome to Handlebars' });
}