
const { createReadStream } = require('fs');
const { joinVoiceChannel, createAudioResource, createAudioPlayer, StreamType } = require('@discordjs/voice');

const player = createAudioPlayer({
	behaviors: {
		noSubscriber: NoSubscriberBehavior.Pause
	},
});

const ding = createAudioResource('../resources/ding.mp3');
const chime = createAudioResource('../resources/chime.mp3');


module.exports.join = function (message, args, errHook) {
	const voiceChannel = message.member.voice.channel;
	const connection = joinVoiceChannel({
		channelId: voiceChannel.id,
		guildId: voiceChannel.guild.id,
		adapterCreator: voiceChannel.guild.voiceAdapterCreator,
		selfDeaf: false,
	});
};

module.exports.leave = function (message, args, errHook) {
	connection.destroy();
	return;
};

module.exports.handraise = function (message, args, errHook) {
	connection.subscribe(player);
	player.play(ding);
	message.channel.send(`Hand raised for ${message.author.username}`);
	return;
};
