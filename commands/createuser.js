const Discord = require("discord.js");
const config = require(`../config.json`)
const node = require('nodeactyl');
const Application = node.Application;
const mysql = require('mysql')
let username = {};
let password = {};
let email = {};
let fname = {};
let lname = {};
let paneluid = {};

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
    
          let ErrCon = new Discord.MessageEmbed()
          .setAuthor(client.user.username, client.user.avatarURL())
          .setColor("#43f967")
          .setFooter('API Latency is ' + `${Date.now() - message.createdTimestamp}` + ' ms, Proudly Hosted by Ghosty.host', client.user.avatarURL())
          .setTimestamp()
          .setDescription("❎ | There was an error connecting to the database! Please report this to the developers") 
          if(err) return message.channel.send(ErrCon);
         
          let NotRegistered= new Discord.MessageEmbed()
          .setAuthor(client.user.username, client.user.avatarURL())
          .setColor("#43f967")
          .setFooter('API Latency is ' + `${Date.now() - message.createdTimestamp}` + ' ms, Proudly Hosted by Ghosty.host', client.user.avatarURL())
          .setTimestamp()
          .setDescription("❎ | You are not registered into our systems! Please register at **http://ghostyadmin.xyz/register.php** then try again") 
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
            .setDescription("```👀| Please check your DM for more information to create the user you requested```")
          message.channel.send(dm)

         let embed1 = new Discord.MessageEmbed()
            .setColor("#43f967")
            .setTimestamp()
            .setFooter('API Latency is ' + `${Date.now() - message.createdTimestamp}` + ' ms, Proudly Hosted by Ghosty.host', client.user.avatarURL())
            .setDescription("```" + `Heyy ${message.author.tag}👋! Thank you for using GhostyAdmin. I will be guiding you during the setup of your account😉. So lets get started❤️` + "```")
         message.author.send(embed1).then(m =>{
 
         let c = m.channel;
    
         let embed2 = new Discord.MessageEmbed()
            .setColor("#43f967")
            .setTimestamp()
            .setFooter('API Latency is ' + `${Date.now() - message.createdTimestamp}` + ' ms, Proudly Hosted by Ghosty.host', client.user.avatarURL())
            .setDescription("```1️⃣| So first, tell me what do you want the user Email to be?```")
         c.send(embed2).then(async function() {
    
         c.awaitMessages(m => m.author.id == message.author.id,
         {max: 1, time: 30000}).then(async collected => {
         email = collected.first().content;
         }).then(async function() {
    
         let embed = new Discord.MessageEmbed()
            .setColor("#43f967")
            .setDescription("```2️⃣| Now tell me what password you would like the user to use to login to the panel```")
            .setFooter('API Latency is ' + `${Date.now() - message.createdTimestamp}` + ' ms, Proudly Hosted by Ghosty.host', client.user.avatarURL())
            .setTimestamp()
         c.send(embed).then(async function() {
    
         c.awaitMessages(m => m.author.id == message.author.id,
         {max: 1, time: 30000}).then(async collected =>{
         password = collected.first().content;
         }).then(async function(){
  
         let embed3 = new Discord.MessageEmbed()
            .setColor("#43f967")
            .setFooter('API Latency is ' + `${Date.now() - message.createdTimestamp}` + ' ms, Proudly Hosted by Ghosty.host', client.user.avatarURL())
            .setTimestamp()
            .setDescription("```3️⃣| Okayy so now tell me what do you want the account's first name to be? (Registration Purposes)```")
         c.send(embed3).then(async function() {
    
         c.awaitMessages(m => m.author.id == message.author.id,
         {max:1, time: 30000}).then(async collected =>{
         fname = collected.first().content;
         }).then(async function() {
  
        let embed4 = new Discord.MessageEmbed()
           .setColor("#43f967")
           .setFooter('API Latency is ' + `${Date.now() - message.createdTimestamp}` + ' ms, Proudly Hosted by Ghosty.host', client.user.avatarURL())
           .setTimestamp()
           .setDescription("```4️⃣|Good, what do you the account's last name to be? (Registration Purposes)```")
        c.send(embed4).then(async function() {
          
        c.awaitMessages(m => m.author.id == message.author.id,
        {max: 1, time: 30000}).then(async collected =>{
        lname = collected.first().content;
        }).then(async function() {
             
        let embed5 = new Discord.MessageEmbed()
          .setColor("#43f967")
          .setFooter('API Latency is ' + `${Date.now() - message.createdTimestamp}` + ' ms, Proudly Hosted by Ghosty.host', client.user.avatarURL()) 
          .setTimestamp()
          .setDescription("```5️⃣| For the last question, tell me what do you want the account's username to be?```")
        c.send(embed5).then(async function() {
    
        c.awaitMessages(m => m.author.id == message.author.id,
        {max: 1, time: 30000}).then(async collected =>{
        username = collected.first().content;
    
        Application.login(rows.host, rows.api, (logged_in) => {
        console.log(logged_in);
});

        Application.createUser(username, password, email, fname, lname, false, "en").then(user => {
        paneluid = user.id;
        let Success = new Discord.MessageEmbed()
          .setAuthor(client.user.username, client.user.avatarURL())
          .setColor("#43f967")
          .setFooter('API Latency is ' + `${Date.now() - message.createdTimestamp}` + ' ms, Proudly Hosted by Ghosty.host', client.user.avatarURL())
          .setTimestamp()
          .setDescription(`**A new user account was created at **__${rows.host}__** with the userID **__(${paneluid})__**! You can login with the informations below👇⬇️**\n\n**__Email:__** ${email}\n**__Password:__** ${password}\n`) 
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
          
  } else{
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
    name: "createUser"
}