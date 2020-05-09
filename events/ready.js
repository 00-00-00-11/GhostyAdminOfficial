const Discord = require(`discord.js`);
const config = require(`../config.json`);
const node = require('nodeactyl-beta');
const application = node.Application;

exports.run = (client) => {
	let membercount = client.users.size;
	console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
	console.log('------------------------------------');
	console.log('-- Ghosty Admin Bot Booting UP! --');
	console.log('------------------------------------');
    console.log('----------------------------\n\n\n\n\n\n');
    console.log('------------------------------------');
	console.log('-- Ghosty Admin Bot Booted UP! ---');
	console.log('------------------------------------\n\n');
    console.log(`[Bot is online | Node: ${process.version} | Discord.js: ${Discord.version}]\nConnected as: ${client.user.username} (ID: ${client.user.id})\n`);
	client.user.setActivity(`Ghosty Admin || Control Pterodactyl Panel From Discord`, {type: 'WATCHING'});
};