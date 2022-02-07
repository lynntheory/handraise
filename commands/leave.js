const audioHandler = require('../handlers/audioHandler.js');

module.exports = {
	name: 'leave',
	async execute(message, args, errHook) {
		if (!message.guild) {
			message.reply(`I can only do this within a server.`);
			return;
		};
		if (!message.member.voice.channel) {
			message.reply(`I need you to join my voice channel for a point of reference.`);
			return;
		} else {
			audioHandler.leave(message, args, errHook);
			return;
		}
	},
};
