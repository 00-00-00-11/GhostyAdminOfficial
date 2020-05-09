const Discord = require("discord.js");
const node = require('nodeactyl');
const p = "#";
const config = require(`../config.json`)
module.exports.run = async (client, message, args) =>{

	registersite = config.register;
    const register = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL())
    .setColor(`#2ffc5c`)
    .addField(`Registration`, `To register your Pterodactyl API, You may visit **${registersite}** and fill in the required information.\n This process of Registration is automatic. As soon as you have entered the information required, you will be registered and you will be able to access Client/Application API Commands right from discord.`)
    .setTimestamp()
    .setFooter('API Latency is ' + `${Date.now() - message.createdTimestamp}` + ' ms, Proudly Hosted by Ghosty.host', client.user.avatarURL());
    message.channel.send(register);
}

module.exports.help = {
    name: "register"
}
