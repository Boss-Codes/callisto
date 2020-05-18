const { Command } = require('../../Core/Classes/Command.js'); 
const { defaultColor, error } = require('../../Core/Utils/Global.js'); 

class Discrim extends Command { 
    constructor(){
        super({
            name: 'discrim',
            module: 'Info', 
            aliases: ['discriminator'], 

            userperms: 'User', 
            helpDetail: "Shows users with a common discriminator to yours, or the one you provide.", 
            helpUsage: '!discrim\n!discrim [discrim]', 
            helpExample: `!discrim\n!discrim 0001`
        });
    }

    async execute(callisto, msg, args) { 
        let discrim = args[0]; 
        if (!discrim) { 
            discrim = msg.member.discriminator
        }        
        const data = msg.channel.guild.members.filter(a => a.user.discriminator === `${discrim}`).map(a => a.user.username + '#' + a.user.discriminator).join('\n');
        if (data.length > 6000) { 
            return callisto.createMessage(msg.channel.id, `${error}Too many members with that discriminator.`)
        }
        callisto.createMessage(msg.channel.id, { 
            embed: { 
                description: `${data}`, 
                color: `${defaultColor}`
            }
        })
    }
}
module.exports.cmd = Discrim;