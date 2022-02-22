const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

client.login('Lol no');
// this be the bot's token. very important don't forget

const commands = [{
    name: 'sus',
    description: "Proves this bot isn't sus"
  }]; 
// This command is just sending a link to a github page with this code
  client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
  
    if (interaction.commandName === 'sus') {
      await interaction.reply("Proof this isn't sus: https://github.com/TaxEvasion1452/TaxEvasion1452/blob/Funni-Cactus-Discord-Bot/cactus.js");
    }
});

const comamnds = [{
    name: "Cactus",
    description: "Cactus"
  }]
// Makes the bot reply
client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'Cactus') {
    await interaction.reply ("Cactus :thumbsup:")  

}})
