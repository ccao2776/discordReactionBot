module.exports = {
    name: 'reactionrole',
    description: "Ability to React to get a Role",
    async execute(message, args, Discord, client) {
        const channel = '821163325655613440';
        const pcRole = message.guild.roles.cache.find(role => role.name === "PC");
        const presidentRole = message.guild.roles.cache.find(role => role.name === "President");
        const eboardRole = message.guild.roles.cache.find(role => role.name === "E-Board");
        const ptRole = message.guild.roles.cache.find(role => role.name === "PT");
        const activeRole = message.guild.roles.cache.find(role => role.name === "Active");
        
        
        const pcEmoji = '👼'
        const presidentEmoji= '😎';
        const eboardEmoji = '🤓';
        const ptEmoji = '😡';
        const activeEmoji = '💙'; 

        let embed = new Discord.MessageEmbed()
        .setColor('#e42643')
        .setTitle('Choose a Role!')
        .setDescription('Choosing a Role will grant you access to more channels!\n\n'
            +`${pcEmoji} for Kailan\n`
            +`${presidentEmoji} for Nick\n`
            +`${eboardEmoji} for eBoard\n` 
            +`${ptEmoji} for PTs\n`
            +`${activeEmoji} for Actives`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(pcEmoji);
        messageEmbed.react(presidentEmoji);
        messageEmbed.react(eboardEmoji);
        messageEmbed.react(ptEmoji);
        messageEmbed.react(activeEmoji);

        client.on('messageReactionAdd', async(reaction, user) =>{
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;

            if(reaction.message.channel.id == channel){
                if(reaction.emoji.name === pcEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(pcRole);
                }
                if(reaction.emoji.name === presidentEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(presidentRole);
                }
                if(reaction.emoji.name === eboardEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(eboardRole);
                }
                if(reaction.emoji.name === ptEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(ptRole);
                }
                if(reaction.emoji.name === activeEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(activeRole);
                }
            }else{
                return;
            }
        });

        client.on('messageReactionRemove', async(reaction, user) => { 
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;

            if(reaction.message.channel.id == channel){
                if(reaction.emoji.name === pcEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(pcRole);
                }
                if(reaction.emoji.name === presidentEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(presidentRole);
                }
                if(reaction.emoji.name === eboardEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(eboardRole);
                }
                if(reaction.emoji.name === ptEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(ptRole);
                }
                if(reaction.emoji.name === activeEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(activeRole);
                }
            }else{
                return;
            }
        });
    }
}