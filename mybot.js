var Discord = require("discord.js");
var secrets = require("./secrets.js");
var bot = new Discord.Client();

bot.on("message", msg => {

  // prefix var
  let prefix = "/";
  // prefix check
  if(!msg.content.startsWith(prefix)) return;
  // bot check
  if(!msg.author.bot) return;
  if (msg.content.startsWith(prefix + "define")) {
      msg.channel.sendMessage("This is your trash definition that I haven't figured out yet!");
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
