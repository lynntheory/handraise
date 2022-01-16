module.exports = {
	name: 'ping',
	async execute(message, args, errHook) {
		return message.reply('Pong!');
	},
};
