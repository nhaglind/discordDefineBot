var Discord = require("discord.js");
var secrets = require("./secrets.js");
var request = require('request');

var bot = new Discord.Client();

bot.on("message", msg => {

  // prefix var
  let prefix = "/";
  // prefix check
  if(!msg.content.startsWith(prefix)) return;
  // bots don't talk to themselves (anti-skynet provision)
  if(msg.author.bot) return;
  if (msg.content.startsWith(prefix + "define")) {
    console.log(msg.content);

    var url = 'https://owlbot.info/api/v1/dictionary/' + msg.content.slice(8);
    console.log(url);
    request(url, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var definitionData = JSON.parse(body);
        msg.channel.sendMessage("Type: " + definitionData[0].type);
        msg.channel.sendMessage("Defenition: " + definitionData[0].defenition);
        msg.channel.sendMessage("Example: " + definitionData[0].example);
      }
    })
  }

  else if (msg.content.startsWith(prefix + "buffy")) {
    msg.channel.sendMessage("I may be dead, but I’m still pretty.");
  }
});

bot.on('ready', () => {
    console.log('I am ready!');
});

// console.log(secrets.discordSecret());

bot.login(secrets.discordSecret());