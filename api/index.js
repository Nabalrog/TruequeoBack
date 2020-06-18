const express = require('express');
const { errors } = require('celebrate')
const api = express();
const cors = require('cors');


api.use(express.urlencoded({ extended: true }));
api.use(express.json({ extended: true }));

// en el cors ponemos las ip que puedan entrar si no ponemos nada
//recibe de cualquier origen. 
api.use(cors());



api.get('/', (req, res) => res.json({ message: 'hello DEVf' }));

api.use('//api/v1', require('../routes'));




api.use(errors());

module.exports = api;