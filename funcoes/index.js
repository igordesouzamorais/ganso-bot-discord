const ganso = async (msg) => {
    msg.channel.send(`Ganso Sistemas ${msg.author} Boa tarde!`);
};

const previsao = async (msg) => {
    const cidade = msg.content.slice(10,msg.content.lenght);
    console.log(cidade);
    const url = ``; // removido estava com token
    console.log(url);
    
    axios.get(url)
    .then(res => console.log(res.data))
    .catch(err => console.log('erro'));
    
    //await msg.channel.send(`Previsao do tempo`);
};

const nica = async (msg) => {
    msg.reply('Nica é coisa de véi!');
};

const real = async (msg) => {
    msg.reply('Ta valendo mais que Bitcoin! É verdade esse bilhete');
};

const bacatai = async (msg) => {
    msg.reply('Fala bacatai dau glória');
};

const emoji = async (msg) => {
    console.log(msg);
  //await msg.message.channel.send(`${msg._emoji.name} é Você`);
};

const cruzeiro = async (msg) => {
    msg.reply('Se for o time de futebol não ta valendo nada!');
};

const palmeiras = async (msg) => {
    msg.reply('Não tem mundial!');
};

const teCai = async (msg) => {
    msg.reply('Shu Liblai');
};

module.exports = {
    ganso,
    previsao,
    nica,
    real,
    bacatai,
    emoji,
    cruzeiro,
    teCai,
    palmeiras
};
