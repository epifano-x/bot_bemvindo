const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client(); 
const config = require("./config.json"); 
const { Client, RichEmbed } = require('discord.js');

// STATUS BOT COM AVISO NO CONSOLE QUANDO INICIA

client.on("ready", () => {
  console.log('BLUE NET NO AR')
  let status = [
    {name:`${client.users.size} pessoas!`, type: 'LISTENING'},
    {name:`tw.tv`, type: 'STREAMING', url:'https://twitch.tv/epifanovz'}
]
function setStatus(){ //Função para o BOT mudar de Status aleatoriamente
    let randomStatus = status[Math.floor(Math.random()*status.length)]
    client.user.setPresence({game: randomStatus})
}
setStatus();
setInterval(() => setStatus(),2000)
})

//bem vindo

client.on("guildMemberAdd", member => {
member.guild.channels.get('658768317930143751').send( '@'+member.user.username+'#'+member.user.discriminator+' Entrou no server!')//APOS O GET ADICIONAR O CANAL ESPECIFICO AONDE VAI FICA O LOG DE ENTRADA
const embed = new RichEmbed()
.setTitle(':man_detective: SEJA BEM VINDO AO SERVIDOR :man_detective:')
.setColor(0xFF0000)
.setDescription(' SE SINTA EM CASA MEU CONSAGRADO <3 ');
member.send(embed);
})
//saiu 
client.on("guildMemberRemove", member => {
member.guild.channels.get('658301793121468455').send(member.user.username + '  Saiu do servidor!');// NO GET ADICIONAR CANAL DE SAIDA

});


//client.on('raw', console.log)


client.login(config.token);
