const express = require('express');
const router = express.Router();

const messages = require('./../../services/messages');

const verify = (req, res, next) => {
	var name = req.body.name;
	var email = req.body.email;
	var telephone = req.body.telephone;
	var country = req.body.country;
	var content = req.body.content;
	
	if(name === undefined || name == ""){
		res.send({resp: 'El nombre ingresado no es valido'});
	} else if(email === undefined || email == ""){
		res.send({resp: 'El email ingresado no es valido'});
	} else if(telephone === undefined || telephone == ""){
		res.send({resp: 'El telefono ingresado no es valido'});
	} else if(country === undefined || country == ""){
		res.send({resp: 'La ciudad ingresada no es valida'});
	} else if(content === undefined || content == ""){
		res.send({resp: 'El contenido ingresado no es valido'});
	} else {
		next();
	}
};

router.route('/')
	.get((req, res) => {
		messages.loadMessages(req, res);
	})
	.post(verify, (req, res) => {
		messages.newMessage(req, res);
	});

module.exports = router;