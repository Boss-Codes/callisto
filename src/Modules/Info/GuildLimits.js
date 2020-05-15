const { Command } = require('../../Core/Classes/Command.js'); 
const { defaultColor } = require('../../Core/Utils/Global.js')

class GuildLimits extends Command { 
    constructor(){
        super({
            name: 'guildlimits', 
            module: 'Info', 
            aliases: ['gl', 'limits', 'guild'], 

            helpDetail: 'Shows the presence cap and max member count for the guild.', 
            helpUsage: '!guildLimits'
        })
    }

        async execute(callisto, msg) { 
            let presenceCap = await callisto.getRESTGuild(msg.channel.guild.id).then(g => g.maxPresences)
            
            if (presenceCap === null) { 
                presenceCap = '25000'
            }

            const maxMembers = await callisto.getRESTGuild(msg.channel.guild.id).then(g => g.maxMembers) 

            callisto.createMessage(msg.channel.id, {
        
                embed: {
                    author: { 
                        name: 'Guild Limits'
                    },
                    thumbnail: { 
                        url: msg.channel.guild.iconURL
                    },
                    color: `${defaultColor}`,
                    fields: [
                        {
                            name: 'Max Members', 
                            value: `${maxMembers}`
                        }, 
                        { 
                            name: 'Max Presences', 
                            value: `${presenceCap}`
                        }
                        
                    ]
                  
                    }
    
                })

      

        }
}
module.exports.cmd = GuildLimits;