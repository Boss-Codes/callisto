const { Command } = require('../../Core/Classes/Command.js'); 
const { defaultColor } = require('../../Core/Utils/Global.js'); 

class Invite extends Command { 
    constructor(){
        super({
            name: 'invite', 
            module: 'Info', 
            aliases: ['inv', 'invitation'],
            
            userperms: 'User',
            helpDetail: 'Sends an invite link for the bot.', 
            helpUsage: '!invite'
        })
    }

    async execute(callisto, msg) { 
        callisto.createMessage(msg.channel.id, { 
            embed: { 
                color: defaultColor, 
                description: `:link: [Invite me here](https://discordapp.com/oauth2/authorize?client_id=625180461551058964&scope=bot&permissions=8)`
            }
        })
    }
}
module.exports.cmd = Invite;
