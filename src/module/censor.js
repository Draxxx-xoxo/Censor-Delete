const {MessageEmbed} = require('discord.js');
const functions = require('../common_functions')

module.exports = {
	module:'Censor',
    permissions:[],
	description: "",
	execute: async (message, discordclient) => {


	var censorArray = await functions.censorWords(message);
	var ignoreChannels = await functions.censorIgnoreChannel(message);
	var ignoreusers = await functions.censorIgnoreUser(message);

	for(let i = 0; i < ignoreChannels.length; i++) {
		if(ignoreChannels[i] == message.channel.id) return;
	}

	for(let i = 0; i < ignoreusers.length; i++) {
		if(ignoreusers[i] == message.member.user.id) return;
	}


	for (let i = 0; i < censorArray.length; i++) { 
		if(message.content.includes(censorArray[i])){
			message.delete();
            console.log('Message from ' + message.author.tag + ' has been delete. Content: ' + message.content )
		}
	}
	}
};
