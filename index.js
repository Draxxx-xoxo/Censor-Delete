const Discord = require('discord.js')
const clc = require('cli-color')
const {token} = require('./config.json')

const client = new Discord.Client();
client.commands = new Discord.Collection();

client.once('ready', () => {
	console.log(clc.red('[-] Main.js running'));
});

client.on('message', async message => {
	if(message.channel.id == "822106967409557545"){
		if(!message.content.startsWith('owo') && !message.content.startsWith('!d bump')){


			if(message.author.id == "302050872383242240" && message.author.id == "408785106942164992") return

			message.delete()
			console.log(message.content + ' has been deleted from ' + message.channel.name)
	
	}
}
	
});


client.login(token);
