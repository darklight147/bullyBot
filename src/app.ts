import Discord from 'discord.js';
import token from './config/token.config';
import channelID from './config/channelID.config';
import express from 'express';

const client = new Discord.Client();

client.on('ready', () => {
	console.log('Ready!');
});

client.login(token);

const Channel: { cache: any } = client.channels;

const SendBot = () => {
	Channel.cache.get(channelID).send('@ˢⁱᵉᵍᵉ𝔅𝔬𝔱 @BLUEY', {
		files: [
			'https://images-ext-1.discordapp.net/external/vVc1Ovez7hhcmPkvRcvD2ITCVVNHDGvyvrOguO041fw/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/449548193969995776/8030233f6c35f27cfae83cf5fab07927.png',
			'https://i.ibb.co/TKwS9FL/hhsafi7ez5u01.jpg',
		],
	});
};

const app = express();

app.get('/bully', (req, res) => {
	SendBot();
	res.sendStatus(200);
});

app.listen(8081, () => {
	console.log('listening ' + 8081);
});
