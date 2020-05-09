const Discord = require("discord.js");
const config = require(`../config.json`)
const node = require('nodeactyl');
const Client = node.Application;
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
    let NotRegistered = new Discord.MessageEmbed()
  .setAuthor(client.user.username, client.user.avatarURL())
  .setColor("#FF0000")
  .setDescription(`${cross} | You are not registered on our systems. Please proceed to register at **__http://ghostyadmin.xyz/register.php__**`)
  .setFooter('API Latency is ' + `${Date.now() - message.createdTimestamp}` + ' ms, Proudly Hosted by Ghosty.host', client.user.avatarURL())
  .setTimestamp()
  
  let ErrCon = new Discord.MessageEmbed()
  .setAuthor(client.user.username, client.user.avatarURL())
  .setColor("#FF0000")
  .setFooter('API Latency is ' + `${Date.now() - message.createdTimestamp}` + ' ms, Proudly Hosted by Ghosty.host', client.user.avatarURL())
  .setTimestamp()
  .setDescription(`${cross} | There was an error connecting to the database. Please report this issue to the developers`)
  
  
	con.query(`SELECT * FROM users WHERE discordid = '${message.author.id}'`, function (err, result, fields) { 
      if (result.length == 0) return message.channel.send(NotRegistered);
      if(err) return message.channel.send(ErrCon);
	    var rows = JSON.parse(JSON.stringify(result[0]));
	    if(rows.api_type == "Application" || rows.api_type == "application") {
		        
		  Client.login(rows.host, rows.api, (logged_in, err) => {
		  console.log(logged_in);
});

		  Client.getAllServers().then((res) => {
        let Embed1 = new Discord.MessageEmbed()
        .setAuthor(client.user.username, client.user.avatarURL())
        .setColor("#43f967")
        .setFooter('API Latency is ' + `${Date.now() - message.createdTimestamp}` + ' ms, Proudly Hosted by Ghosty.host', client.user.avatarURL())
        .setTimestamp()
        
        res.forEach((Obj)=>{
          
            let suspend = (Obj.attributes.suspended);
            if (suspend === true) {
              suspend = ["Yes"];
            } else {
              suspend = ["No"];
            }
          
            Embed1.addField(`${Obj.attributes.name} ¦ ${Obj.attributes.identifier}`, "```"+`OwnerID: ${Obj.attributes.user}\nSuspended: ${suspend}\nCreatedOn: ${Obj.attributes.created_at}`+"```");
        })
        message.channel.send(Embed1);
      })
	}
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
    name: "getallservers"
}
