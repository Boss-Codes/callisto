const { Command } = require('../../Core/Classes/Command.js'); 
const { defaultColor } = require('../../Core/Utils/Global.js');

class Uptime extends Command { 
    constructor(){
        super({
            name: 'uptime', 
            module: 'Info', 
            aliases: ['up'], 

            userperms: 'User', 
            helpDetail: 'Shows the bot\'s uptime.', 
            helpUsage: '!uptime'
        });
    }

    async execute(callisto, msg) { 
        const rawUptime = callisto.uptime; 
        let sseconds = (Math.round(rawUptime / 1000)); 
        let days = Math.floor(Math.round(sseconds) / 86400); 
        let hours = Math.floor(Math.round(sseconds) / 3600); 
        sseconds %= 3600;
        let minutes = Math.floor(Math.round(sseconds) / 60); 
        let seconds = sseconds % 60

        const data = { 
            embed: { 
                title: 'Uptime', 
                color: defaultColor, 
                description: `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`, 
                footer: { 
                    text: `PID: ${process.pid} | Callisto | Cluster 0 | Shard 0`
                }
            }
        }
        callisto.createMessage(msg.channel.id, data)
    }
}
module.exports.cmd = Uptime;