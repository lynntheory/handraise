// internal imports
const conversation = require('../config/conversation.json');

var response;
var listName;

module.exports.check = function (message) {
	if (message.channel.name != config.convChannel) {
	  return;
	}
	listName = textScan(message);
	if (listName) {
		response = randResponse(listName);
		message.reply(response);
	}
	listName = undefined;
	return;
};

function textScan (message) {
	if (message.content.match(/thanks/i) || message.content.match(/thank you/i)) {
		listName = 'thanks';
	} else if (message.content.match(/hello/i) || message.content.match(/good morning/i) || message.content.match(/gmorning/i) || message.content.match(/hey/i)) {
		listName = 'hello';
	} else if (message.content.match (/handraise/i)) {
		listName = 'general';
	}
	return listName;
}

function randResponse (listName) {
	const list = conversation[listName];
	const limit = list.length;
	const n = Math.floor(Math.random() * limit);
	response = list[n];
	return response;
}
