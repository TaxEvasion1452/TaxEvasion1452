const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const commands = [{
    name: 'sus',
    description: "Proves this bot isn't sus"
  }]; 

  client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
  
    if (interaction.commandName === 'sus') {
      await interaction.reply("Proof this isn't sus: https://github.com/TaxEvasion1452/TaxEvasion1452/blob/Funni-Cactus-Discord-Bot/cactus.js");
    }
  });

Token = "Lol_noob_you_fucking_thought_I_was_that_stupid_to_leave_token_public?"
