// Require the necessary discord.js classes
const fs = require('fs');
const http = require('http');
const express = require('express');
const { Client, Intents, WebhookClient } = require('discord.js');
const config = require('./config/config.json');

// Create a new client and new webhook
const errHook = new WebhookClient({ id: process.env.errorID, token: process.env.errorToken });
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const app = express();
app.get("/", (req, res) => res.sendStatus(200));
app.listen(process.env.PORT || 3000);

//error status
var errToggle = 0;
setInterval(function() {
	http.get(`${config.botURL}`);
	try{
		if (errToggle != 1) {
				const random = Math.floor(Math.random() * (config.presence.length - 1) + 1);
			client.user.setActivity(config.presence[random]);
		}
	} catch (err) {
		client.user.setActivity('check console');
		console.log(err);
		errHook.send(err);
		errToggle = 1;
	}
}, 280000);

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	client.on(event.name, (errHook, ...args) => event.execute(...args));
}

// Login to Discord with your client's token
client.login(process.env.SECRET);
