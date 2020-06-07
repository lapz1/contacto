const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
	name:{
		type: String,
		rquered: true
	},
	email:{
		type: String,
		rquered: true
	},
	telephone:{
		type: Number,
		rquered: true
	},
	country:{
		type: String,
		rquered: true
	},
	content:{
		type: String,
		rquered: true
	},
	date: {
		type: Date,
		rquered: true
	}
});

const messageModel = mongoose.model('messages', messageSchema);

module.exports = messageModel;