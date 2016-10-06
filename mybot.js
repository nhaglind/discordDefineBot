var Discord = require("discord.js");
var secrets = require("./secrets.js");
var bot = new Discord.Client();

bot.on("message", msg => {
    if (msg.content.startsWith("/define")) {
        msg.channel.sendMessage("This is your trash definition that I haven't figured out yet!");
    }
});

bot.on('ready', () => {
  console.log('I am ready!');
});

// console.log(secrets.discordSecret());

bot.login(secrets.discordSecret());
