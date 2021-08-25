const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { SlashCommandBuilder } = require('@discordjs/builders');
require('dotenv').config();

const commands = [new SlashCommandBuilder()
    .setName('youtube')
    .setDescription('Creates Youtube Together Link!'),new SlashCommandBuilder()
    .setName('chess')
    .setDescription('Creates Chess Link!'),new SlashCommandBuilder()
    .setName('poker')
    .setDescription('Creates Poker Link!'),new SlashCommandBuilder()
    .setName('betrayal')
    .setDescription('Creates Betrayal Link!'),new SlashCommandBuilder()
    .setName('fishing')
    .setDescription('Creates Fishing Link!')].map(command => command.toJSON());

const clientId = '880018212648026152';
const guildId = '764032742106595338';
const rest = new REST({ version: '9' }).setToken(process.env.BOT_TOKEN);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			Routes.applicationCommands(clientId),
			{ body: commands },
		);

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();