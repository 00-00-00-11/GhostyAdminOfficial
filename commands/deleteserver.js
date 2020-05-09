const Discord = require("discord.js");
const config = require(`../config.json`)
const node = require('nodeactyl-beta');
const Application = node.Application;
const mysql = require('mysql');
const con = mysql.createConnection({
    connectionLimit: 20,
    host: config.dbhost,
    port: config.dbport,
    user: config.dbuser,
    password: config.dbpass,
    database: config.db,
});

module.exports.run = async (client, message, args) => {
	if(!args[0]) return message.channel.send("Use: #deleteServer [Internal ID]").then(msg => msg.delete(3000)); // Proper Usage
	  let NotRegistered = new Discord.MessageEmbed()
  .setAuthor(client.user.username, client.user.avatarURL())
  .setColor("#FF0000")
  .setDescription("❎ | You are not registered on our systems. Please proceed to register at **__http://ghostyadmin.xyz/register.php__**")
  .setFooter('API Latency is ' + `${Date.now() - message.createdTimestamp}` + ' ms, Proudly Hosted by Ghosty.host', client.user.avatarURL())
  .setTimestamp()
  
  let ErrCon = new Discord.MessageEmbed()
  .setAuthor(client.user.username, client.user.avatarURL())
  .setColor("#FF0000")
  .setFooter('API Latency is ' + `${Date.now() - message.createdTimestamp}` + ' ms, Proudly Hosted by Ghosty.host', client.user.avatarURL())
  .setTimestamp()
  .setDescription("❎ | There was an error connecting to the database. Please report this issue to the developers")
  
	var userid = message.author.id; // The author of the message (ID) is stored in variable userid
	con.query(`SELECT * FROM users WHERE discordid = '${userid}'`, function (err, result, fields) { // Basic MySQL Query to select everything from users where discordis = the author of the message (ID).
	        if(err) return message.channel.send(ErrCon);
			if (result.length == 0) return message.channel.send(NotRegistered);
	        var rows = JSON.parse(JSON.stringify(result[0])); // parses the json result into rows
	        if(rows.api_type == "Application" || rows.api_type == "Application") { // If API_type is Client or client
		        
	        	/* Logging into the pterodactyl panel */
		        Application.login(rows.host, rows.api, (logged_in, err) => {
		    	console.log(logged_in); // True or False (Logged in or not logged in)
				});

				/*Application.getUserInfo(args[0]).then(abc => {
				if(!abc.id) return message.channel.send(`The request could not be processed.`); */
				//else{
				Application.deleteServer(args[0]).then(abc => {
				if(abc.config) return message.channel.send("The request could not be processed");
				let embeda = new Discord.MessageEmbed()
				.setAuthor(client.user.username, client.user.avatarURL())
		    	.setColor(`#43f967`)
		    	.addField("Server ID", args[0])
		    	.addField("Status", "Server has been deleted successfully")
		    	.setTimestamp()
		    	.setFooter('API Latency is ' + `${Date.now() - message.createdTimestamp}` + ' ms, Proudly Hosted by Ghosty.host', client.user.avatarURL()); // Ping
		    	message.channel.send(embeda); 
				}).catch(err => {
				    console.log(err);
				})
			}
		/*})*/

	else{
		let command_api = "Application";
		let wrongapi = new Discord.MessageEmbed()
		  .setAuthor(client.user.username, client.user.avatarURL())
		  .setColor("#FF0000")
		  .setDescription(`❎ | You are registered on our systems but the API is not ${command_api}. To update the API, head on to **__http://ghostyadmin.xyz/__**`)
		  .setFooter('API Latency is ' + `${Date.now() - message.createdTimestamp}` + ' ms, Proudly Hosted by Ghosty.host', client.user.avatarURL())
		  .setTimestamp()
		message.channel.send(wrongapi) // If API_Type is not Client
	}
	})
}

module.exports.help = {
    name: "deleteServer"
}
