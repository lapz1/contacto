const messagesModel = require('./../../models/messages');
const dateUtilities = require('./../../utilities/date');

const newMessage = (req, res) => {
	const message = {		
		name: req.body.name,
		email: req.body.email,
		telephone: req.body.telephone,
		country: req.body.country,
		content: req.body.content,
		date: dateUtilities.getDate()
	};
	
	new messagesModel(message)
	.save()
	.then(() => {
		res.send({resp: 'El mensaje ha sido creado'});
	});	
}

const loadMessages = (req, res) => {
	messagesModel.find({})
	.then(messages=>{
		res.status(200).send(messages);
	});
}

module.exports = { newMessage, loadMessages };