const { Command } = require('../../Core/Classes/Command.js'); 
const { defaultColor } = require('../../Core/Utils/Global.js'); 

class Support extends Command { 
    constructor(){
        super({
            name: 'support', 
            module: 'Info', 
            
            userperms: 'User',
            helpDetail: 'Sends an invite link for the bot\'s support server.', 
            helpUsage: '!support'
        })
    }

    async execute(callisto, msg) { 
        callisto.createMessage(msg.channel.id, { 
            embed: { 
                color: defaultColor, 
                description: `:link: [Join here](https://discord.gg/35CGyyv)`
            }
        })
    }
}
module.exports.cmd = Support;
