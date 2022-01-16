const cmds = require('./handlers/commandHandler.js');
const dlg = require('./handlers/dialogueHandler.js');

module.exports = {
	name: 'messageCreate',
	once: false,
	execute(errHook, message) {
		if (message.author.bot) return;
		if (message.content.startsWith(config.Prefix)) {
			console.log('command prefix recognized');
			cmds.check(message, errHook);
		} else {
			dlg.check(message, errHook);
		}
	},
};
