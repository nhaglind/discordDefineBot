var Discord = require("discord.js");
var secrets = require("./secrets.js");
var request = require('request');

var bot = new Discord.Client();

bot.on("message", msg => {

    let prefix = "/";
    if (!msg.content.startsWith(prefix)) return;
    // bots don't talk to themselves (anti-skynet provision)
    if (msg.author.bot) return;
    if (msg.content.startsWith(prefix + "define")) {
        console.log(msg.content);
        var url = 'https://owlbot.info/api/v1/dictionary/' + msg.content.slice(8);
        console.log(url);
        request(url, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                var DefinitionData = JSON.parse(body);
                msg.channel.sendMessage("**Definition: ** " + "```" + DefinitionData[0].type + ": " + DefinitionData[0].defenition + "```" + "\n" +
                    "**Example: ** " + "```" + DefinitionData[0].example + "```");
            }
        })
    } else if (msg.content.startsWith(prefix + "buffy")) {
        msg.channel.sendMessage("I may be dead, but I’m still pretty.");
    }
});

bot.on('ready', () => {
    console.log('I am ready!');
});

bot.login(secrets.discordSecret());