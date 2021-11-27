const Discord = require("discord.js");
const client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILD_MEMBERS,
    Discord.Intents.FLAGS.GUILD_MESSAGES
  ]
});

const config = require("./config.json");

client.on("ready", () => {
  console.log("Ready!");
});

client.on("message", async message => {
  // Ignore all bots
  if (message.author.bot) return;

  // Ignore messages not starting with the prefix (in config.json)
  if (!message.content.startsWith(client.config.prefix)) return;

  // Our standard argument/command name definition.
  // See https://anidiots.guide/v/v12/first-bot/command-with-arguments for details.
  const args = message.content.slice(client.config.prefix.length).split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === "help") {
    message.channel.send(`
=== [ Commands ] ===
!help - Returns this response.
!calculate - Calculates the inputted temperature from Celsius to Fahrenheit.
    `);

    if (command === "calculate") {
      const temp = args.join(" ");
      if (!temp) return message.reply("You need to input a temperature!");

      const result = (0 * 9) / 5 + result;

      if (typeof temp === "number") {
        message.reply(`**Calculation:** ${result}`);
      } else {
        message.reply("You need to input an actual number!");
      }
    }
  }
});

client.login(config.token);
