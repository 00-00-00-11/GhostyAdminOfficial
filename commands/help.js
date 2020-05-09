const Discord = require("discord.js");
const node = require('nodeactyl');
const p = "#";
const config = require(`../config.json`)
module.exports.run = async (client, message, args) =>{


    const helpembed = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL())
    .setColor(`#2ffc5c`)
    .addField(`❯ Utility Commands 🛠`, `• *${p}register* : Registers your API into database.\n`)
    .addField(`❯ Client_API Commands 🤖`, `• *${p}getServerInfo [ID]* : Gets the server info from the API you have registered.\n• *${p}getServerUsage [ID]* : Gets the server RAM, CPU and Disk usage.\n• *${p}startServer [ID]* : Starts the server.\n• *${p}stopServer [ID]* : Stops the server.\n• *${p}restartServer [ID]* : Restarts the server.\n• *${p}killServer [ID]* : Kills the server.\n`)
    .addField(`❯ Application_API Commands 🚀`, `• *${p}getUserInfo [ID]* : Gets the user info from the API you have registered.\n• *${p}getNodeInfo [ID]* : Gets the node info from the API you have registered.\n• *${p}deleteUser [ID]* : Removes the user from the panel.\n• *${p}createUser* : Creates a user on the panel.\n• *${p}createServer* : Creates a server on the panel.`)
    .setTimestamp()
    .setFooter('API Latency is ' + `${Date.now() - message.createdTimestamp}` + ' ms, Proudly Hosted by Ghosty.host', client.user.avatarURL());
    message.channel.send(helpembed);
}

module.exports.help = {
    name: "help"
}