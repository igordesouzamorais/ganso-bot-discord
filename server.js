const express = require('express');
const app = express();
const axios = require('axios');
const config = require('./config.js');

const Discord = require('discord.js');
const client = new Discord.Client();

const func = require('./funcoes/index');

 
app.listen(process.env.PORT || 8080, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async msg => {
	
	if (msg.content === '-ganso') {
		await func.ganso(msg);
	}

	if(msg.content.startsWith('-previsao')) {
		await func.previsao(msg);
	}

	if (msg.content.startsWith('-nica')) {
		await func.nica(msg);
	}

	if (msg.content.startsWith('-real')) {
		await func.real(msg);
	}

	if (msg.content.startsWith('-cruzeiro')) {
		await func.cruzeiro(msg);
	}

	if (msg.content.startsWith('-palmeiras')) {
		await func.palmeiras(msg);
	}

	if (msg.content.toLowerCase() == 'te carai djow' || msg.content.toLowerCase() == ('te carai jow') || msg.content.toLowerCase() == ('te carai jou') || msg.content.toLowerCase() == ('te carai diou')) {
		await func.bacatai(msg);
	}

	if (msg.content === 'te cai') {
		await func.teCai(msg);
	}
});

client.on('messageReactionAdd', async msg => { // ativa ao reagir com algum emoji na mensagem
  	await emoji(msg);
});

client.login(config.token);