const express = require('express');
const routes = express.Router();
const connection = require('./database/db');
const fs = require('fs');

const getSocialFacebook = require('./controller/getSocialFacebook');
const getSocialInstagram = require('./controller/getSocialInstagram');

connection.connect((err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Connected on Database MySQL');
    }
});


routes.get('/facebook/:link', getSocialFacebook);
routes.get('/instagram/:link', getSocialInstagram);

module.exports = routes;