const audioHandler = require('../handlers/audioHandler.js');

module.exports = {
	name: 'join',
	async execute(message, args, errHook) {
		if (!message.guild) {
			message.reply(`I can only do this within a server.`);
			return;
		};
		if (!message.member.voice.channel) {
			message.reply(`I need you to join a voice channel first so I know where to go.`);
			return;
		} else {
			audioHandler.join(message, args, errHook);
			return;
		}
	},
};
