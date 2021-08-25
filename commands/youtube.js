const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('youtube')
		.setDescription('Creates Youtube Together Link!'),
};