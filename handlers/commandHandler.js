const cmdFiles = fs.readdirSync('../commands').filter(file => file.endsWith('.js'));

module.exports.check = function (message, errHook) {
	const args = message.content.slice(config.Prefix.length).split(' ');
	for (const file of cmdFiles) {
		const command = require(`../commands/${file}`);
		return command(message, args, errHook);
	}
};
