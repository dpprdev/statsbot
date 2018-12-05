const Discord = require("discord.js") //Define Discord.
const moment = require("moment"); //Define moment.
const client = new Discord.Client(); //The bot itself.

client.on("ready", () => {
if (client.guilds.size < 1) {
console.err("The bot is not in any guild.")
process.exit(1);
return;
} //Shutdowns, if bot is not in any guild
const text = `
______________________________
Ready since: ${moment(Date.now()).format('dddd, MMMM do YYYY, HH:mm:ss')}
Server: ${client.guilds.first().name}
Credits: https://github.com/dpprdev/statsbot/
______________________________
` //The text that displays to console, when client is ready.
console.log(text)
})
client.on('guildMemberAdd', (member) => {
let guild = client.guilds.first();
//All choices are optional here. 
guild.channels.get("channel id goes here.").setName(`Total Members: ${guild.memberCount}`) // You can change this text, but still keep ${guild.memberCount}, as it defines total members.
guild.channels.get("channel id goes here.").setName(`Users: ${guild.members.filter(m => !m.user.bot).size}`) // This text is also changeable, still keep the code in ${}
guild.channels.get("channel id goes here.").setName(`Bots: ${guild.members.filter(m => m.user.bot).size}`) // This text is also changeable, still keep the code in ${}
})
client.on('guildMemberRemove', (member) => {
let guild = client.guilds.first();
if ()
//All choices are optional here. The channel ids must be right, else the 
.channels.get("channel id goes here.").setName(`Total Members: ${guild.memberCount}`) // You can change this text, but still keep ${guild.memberCount}, as it defines total members.
guild.channels.get("channel id goes here.").setName(`Users: ${guild.members.filter(m => !m.user.bot).size}`) // This text is also changeable, still keep the code in ${}
guild.channels.get("channel id goes here.").setName(`Bots: ${guild.members.filter(m => m.user.bot).size}`) // This text is also changeable, still keep the code in ${}
})
client.login("token goes here")
