const Discord = require("discord.js");
const config = require(`../config.json`)
const node = require('nodeactyl');
const Client = node.Client;
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
	const cross = client.emojis.cache.get("703930271535333406");
	var userid = message.author.id; // The author of the message (ID) is stored in variable userid
		  let NotRegistered = new Discord.MessageEmbed()
  .setAuthor(client.user.username, client.user.avatarURL())
  .setColor("#FF0000")
  .setDescription(`${cross} | You are not registered on our systems. Please proceed to register at **__http://ghostyadmin.xyz/register.php__**`)
  .setFooter('API Latency is ' + `${Date.now() - message.createdTimestamp}` + 'ms, Proudly Hosted by Ghosty.host', client.user.avatarURL())
  .setTimestamp()
  
  let ErrCon = new Discord.MessageEmbed()
  .setAuthor(client.user.username, client.user.avatarURL())
  .setColor("#FF0000")
  .setFooter('API Latency is ' + `${Date.now() - message.createdTimestamp}` + 'ms, Proudly Hosted by Ghosty.host', client.user.avatarURL())
  .setTimestamp()
  .setDescription(`${cross} | There was an error connecting to the database. Please report this issue to the developers`)
  
	con.query(`SELECT * FROM users WHERE discordid = '${userid}'`, function (err, result, fields) { // Basic MySQL Query to select everything from users where discordis = the author of the message (ID).

			if (result.length == 0) return message.channel.send(NotRegistered);     
			if(err) return message.channel.send(ErrCon);
	        var rows = JSON.parse(JSON.stringify(result[0])); // parses the json result into rows
	        if(rows.api_type == "Client" || rows.api_type == "client") { // If API_type is Client or client
		        
	        	/* Logging into the pterodactyl panel */
		        Client.login(rows.host, rows.api, (logged_in, err) => {
		    	console.log(logged_in); // True or False (Logged in or not logged in)
				});

		        /* getAllServers  */
		        Client.getAllServers(args[0]).then(response => {
		        if(response.config) return message.channel.send(`The request could not be processed.`);
				let Embed1 = new Discord.MessageEmbed()
                   .setAuthor(client.user.username, client.user.avatarURL())
                   .setColor("#43f967")
                   .setFooter('API Latency is ' + `${Date.now() - message.createdTimestamp}` + 'ms, Proudly Hosted by Ghosty.host', client.user.avatarURL())
                   .setTimestamp()
				
				response.forEach(Obj =>{
					Embed1.addField(`¦ ${Obj.attributes.name} ¦`, "```"+`Server ID: ${Obj.attributes.identifier}\nRam: ${Obj.attributes.limits.memory}\nDisk: ${Obj.attributes.limits.disk}`+"```");
				 }) ;
				message.channel.send(Embed1);
		}).catch((error) => { // If error occured while runnng the getSevrerInfo(`ServerID`)
		    throw error;
		});
	}
	else{
		let command_api = "Client";
		let wrongapi = new Discord.MessageEmbed()
		  .setAuthor(client.user.username, client.user.avatarURL())
		  .setColor("#FF0000")
		  .setDescription(`❎ | You are registered on our systems but the API is not ${command_api}. To update the API, head on to **__http://ghostyadmin.xyz/__**`)
		  .setFooter('API Latency is ' + `${Date.now() - message.createdTimestamp}` + 'ms, Proudly Hosted by Ghosty.host', client.user.avatarURL())
		  .setTimestamp()
		message.channel.send(wrongapi) // If API_Type is not Client
	}
	})
}

module.exports.help = {
    name: "listAllServers"
}