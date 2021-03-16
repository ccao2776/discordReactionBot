module.exports = {
    name: 'ping',
    description: "simple ping command to test if the bot is running",
    execute(message, args){

        let role = message.guild.roles.cache.find(r => r.name === "Mod");

        if(message.member.roles.cache.some(r => r.name == "Mod")){
            message.channel.send('pong!');
        }else{
            message.channel.send('Permissions not Succicent');
        }
    }
}