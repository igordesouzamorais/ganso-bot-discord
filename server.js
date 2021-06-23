const express = require('express');
const path = require('path');
const nomeApp = process.env.npm_package_name;
const app = express();
const config = require('./config.js');

const Discord = require('discord.js');
const client = new Discord.Client();

 
app.listen(process.env.PORT || 8080, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async msg => {
	
	if (msg.content === '-ganso') {
		await msg.channel.send(`Ganso Sistemas ${msg.author} Boa tarde!`);
	}
});

client.on('messageReactionAdd', async msg => {
  console.log(msg);
  await msg.message.channel.send(`${msg._emoji.name} é Você`);
});

client.login(config.token);