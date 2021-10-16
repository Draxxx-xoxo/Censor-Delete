const Discord = require('discord.js')
const {Intents} = require('discord.js')
const clc = require('cli-color')
const {token} = require('./config.json')

const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });
client.commands = new Discord.Collection();

client.once('ready', () => {
	console.log(clc.red('[-] Main.js running'));
});

client.on('messageCreate', async message => {
	const censor = require('./module/censor')

	if(message.author.bot) return;

	try{
		censor.execute(message, client)
	} catch (error) {
		console.log(error);
	}
	
});


client.login(token);
