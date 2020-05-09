const Discord = require("discord.js");
const config = require(`../config.json`)
const node = require('nodeactyl');
const Application = node.Application;
const mysql = require('mysql')
let version = {};
let sname = {};
let oid = {};
let ram = {};
let disk = {};
let sid = {};

const con = mysql.createConnection({
    connectionLimit: 20,
    host: config.dbhost,
    port: config.dbport,
    user: config.dbuser,
    password: config.dbpass,
    database: config.db,
});

module.exports.run = async (client, message, args) => {
  
	var userid = message.author.id;
	con.query(`SELECT * FROM users WHERE discordid = '${userid}'`, function (err, result, fields) {
    
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
    if(err) return message.channel.send(ErrCon);
        if (result.length == 0) return message.channel.send(NotRegistered);
    
	        var rows = JSON.parse(JSON.stringify(result[0]));
	        if(rows.api_type == "Application" || rows.api_type == "application") {
		        
		      Application.login(rows.host, rows.api, (logged_in, err) => {
		    	console.log(logged_in); 
				});
 
			
	        let dm = new Discord.MessageEmbed()
            .setColor("#43f967")
            .setFooter('API Latency is ' + `${Date.now() - message.createdTimestamp}` + ' ms, Proudly Hosted by Ghosty.host', client.user.avatarURL())
            .setTimestamp()
            .setDescription("```👀| Please check your DM for more information to create the server you requested```")
          message.channel.send(dm)

         let embed1 = new Discord.MessageEmbed()
            .setColor("#43f967")
            .setTimestamp()
            .setFooter('API Latency is ' + `${Date.now() - message.createdTimestamp}` + ' ms, Proudly Hosted by Ghosty.host', client.user.avatarURL())
            .setDescription("```" + `Heyy ${message.author.tag}👋! Thank you for using GhostyAdmin. I will be guiding you during the setup of your server😉. So lets get started❤️` + "```")
         message.author.send(embed1).then(m =>{
 
         let c = m.channel;
    
         let embed2 = new Discord.MessageEmbed()
            .setColor("#43f967")
            .setTimestamp()
            .setFooter('API Latency is ' + `${Date.now() - message.createdTimestamp}` + ' ms, Proudly Hosted by Ghosty.host', client.user.avatarURL())
            .setDescription("```1️⃣| So first, tell me what server version you want (use latest for latest)```")
         c.send(embed2).then(async function() {
    
         c.awaitMessages(m => m.author.id == message.author.id,
         {max: 1, time: 30000}).then(async collected => {
         version = collected.first().content;
         }).then(async function() {
    
         let embed = new Discord.MessageEmbed()
            .setColor("#43f967")
            .setDescription("```2️⃣| Now tell me what do you want the ServerName to be```")
            .setFooter('API Latency is ' + `${Date.now() - message.createdTimestamp}` + ' ms, Proudly Hosted by Ghosty.host', client.user.avatarURL())
            .setTimestamp()
         c.send(embed).then(async function() {
    
         c.awaitMessages(m => m.author.id == message.author.id,
         {max: 1, time: 30000}).then(async collected =>{
         sname = collected.first().content;
         }).then(async function(){
  
         let embed3 = new Discord.MessageEmbed()
            .setColor("#43f967")
            .setFooter('API Latency is ' + `${Date.now() - message.createdTimestamp}` + ' ms, Proudly Hosted by Ghosty.host', client.user.avatarURL())
            .setTimestamp()
            .setDescription("```3️⃣| Okayy so tell me what is the OwnerID of the serverowner```")
         c.send(embed3).then(async function() {
    
         c.awaitMessages(m => m.author.id == message.author.id,
         {max:1, time: 30000}).then(async collected =>{
         oid = collected.first().content;
         }).then(async function() {
  
        let embed4 = new Discord.MessageEmbed()
           .setColor("#43f967")
           .setFooter('API Latency is ' + `${Date.now() - message.createdTimestamp}` + ' ms, Proudly Hosted by Ghosty.host', client.user.avatarURL())
           .setTimestamp()
           .setDescription("```4️⃣|Good, how much Ram do you want to allocate to the server```")
        c.send(embed4).then(async function() {
          
        c.awaitMessages(m => m.author.id == message.author.id,
        {max: 1, time: 30000}).then(async collected =>{
        ram = collected.first().content;
        }).then(async function() {
             
        let embed5 = new Discord.MessageEmbed()
          .setColor("#43f967")
          .setFooter('API Latency is ' + `${Date.now() - message.createdTimestamp}` + ' ms, Proudly Hosted by Ghosty.host', client.user.avatarURL()) 
          .setTimestamp()
          .setDescription("```4️⃣| For the last question, tell me how much Disk space do you want to allocate to the server```")
        c.send(embed5).then(async function() {
    
        c.awaitMessages(m => m.author.id == message.author.id,
        {max: 1, time: 30000}).then(async collected =>{
        disk = collected.first().content;
    
        Application.login(rows.host, rows.api, (logged_in) => {
        console.log(logged_in);
});

        Application.createServer(version, sname, oid, null, "3", "quay.io/pterodactyl/core:java", "java -Xms128M -Xmx{{SERVER_MEMORY}}M -jar {{SERVER_JARFILE}}", ram, "0", disk, "500", "100", "1", "1").then(res => {
        sid = res.id;
        let Success = new Discord.MessageEmbed()
          .setAuthor(client.user.username, client.user.avatarURL())
          .setColor("#43f967")
          .setFooter('API Latency is ' + `${Date.now() - message.createdTimestamp}` + ' ms, Proudly Hosted by Ghosty.host', client.user.avatarURL)
          .setTimestamp()
          .setDescription(`**A new server was created at **__${rows.host}__** with the ServerID **__(${sid})__**! Some of the specs are down below👇⬇️**\n\n**__Name:__** ${sname}\n**__Ram:__** ${ram}\n**__Disk Space__** ${disk}\n`) 
        c.send(Success);
}).catch(err => {
    console.log(err);
});
                                           })
                                      })
                                 })
                             })
                         })
                     })
                 })
             })
         })
     })
 })
          
	}  else{
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
    name: "createServer"
}
