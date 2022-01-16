module.exports = {
	name: 'ready',
	execute(errHook, client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		errHook.send(`Ready! Logged in as ${client.user.tag}`);
	},
};
