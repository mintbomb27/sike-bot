const Discord = require('discord.js');
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILD_VOICE_STATES, Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });
const { DiscordTogether } = require('discord-together');
require('dotenv').config();

client.discordTogether = new DiscordTogether(client);

client.on('ready', () => { console.log(`Logged in as ${client.user.tag}`) })
var currentMemberVC = {
    'member_id': 'channel_id'
};

var commands = {
    'youtube': 'Youtube Together',
    'chess': 'Chess in the Park',
    'poker':'Poker Together',
    'betrayal':'Betrayal',
    'fishing':'Fishing Game'
}

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
    const { commandName } = interaction;
    if (commands[commandName]) {
        if (currentMemberVC[interaction.member.user.id] && interaction.guild.channels.cache.get(currentMemberVC[interaction.member.user.id])) {
            client.discordTogether.createTogetherCode(currentMemberVC[interaction.member.user.id] ?? interaction.member.voice.channel.id, commandName.toString()).then(async invite => {
                const row = new Discord.MessageActionRow()
			.addComponents(
				new Discord.MessageButton()
					.setLabel(commands[commandName])
					.setStyle('LINK')
                    .setURL(`${invite.code}`),
			);
                await interaction.reply({content: `There you go! Click here.`, components: [row]});
            });
        } else {
            await interaction.reply(`HEY! you're not in a vc -_-`);
        };
    }
});

client.on("voiceStateUpdate", (oldVoiceState, newVoiceState) => {
    if (newVoiceState.channel) {
        console.log(`${newVoiceState.member.user.tag} connected to ${newVoiceState.channel.id}.`);
        currentMemberVC[newVoiceState.member.user.id] = newVoiceState.channel.id;
    } else if (oldVoiceState.channel) {
        delete currentMemberVC[oldVoiceState.member.user.id];
        console.log(`${oldVoiceState.member.user.tag} disconnected from ${oldVoiceState.channel.id}.`);
    };
});

client.login(process.env.BOT_TOKEN);