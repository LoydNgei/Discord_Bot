
require('dotenv').config();

const { Client, Events, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.once('message', (message) => {
    // if (message.author.bot) return;
    console.log(`[${message.author.tag}]: ${message.content}`);
    // if (message.content === 'hello') {
    //     message.channel.send('hello');
    // }
});




client.login(process.env.DISCORDJS_BOT_TOKEN);


