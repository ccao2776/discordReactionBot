const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

/* Search Through Directory of Commands to ensure Command is a valid .js file */
const commandFiles = fs.readdirSync('./Commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./Commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', ()=> {
    console.log('Reaction Bot is online!')
});

client.on('message', message =>{

    /* Command token prefix */
    if(!message.content.startsWith(prefix) || message.author.bot){
        return;
    }

    /* Enable parsing for Concurrent Commands */
    const args = message.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();

    /* Basic Command Support */
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }else if(command === 'reactionrole'){
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    }
});






/* You thought */
client.login(process.env.DISCORD_TOKEN);