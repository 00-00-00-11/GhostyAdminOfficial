const Discord = require(`discord.js`);
const fs = require(`fs`);
const config = require(`./config.json`);
const client = new Discord.Client();
const node = require('nodeactyl-beta');
const wait = require('util').promisify(setTimeout);
const mysql = require('mysql');
const con = mysql.createConnection({
    host: config.dbhost,
    port: config.dbport,
    user: config.dbuser,
    password: config.dbpass,
    database: config.db,
});

fs.readdir(`./events/`, (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      let eventFunction = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
});
client.login(`${config.token}`);
