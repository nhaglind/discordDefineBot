var Discord = require("discord.js");
var secrets = require("./secrets.js");
var request = require('request');

var bot = new Discord.Client();

bot.on("message", msg => {

    // prefix var
    let prefix = "/";
    // prefix check
    if (!msg.content.startsWith(prefix)) return;
    // bots don't talk to themselves (anti-skynet provision)
    if (msg.author.bot) return;

    if (msg.content.startsWith(prefix + "define")) {

        request
            .get('https://owlbot.info/')
            .on('response', function(response) {
                console.log(response.statusCode)
                console.log(response.headers['content-type'])
            })
        msg.channel.sendMessage("");

    }
});

bot.on('ready', () => {
    console.log('I am ready!');
});

// console.log(secrets.discordSecret());

bot.login(secrets.discordSecret());