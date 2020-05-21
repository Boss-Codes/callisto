const { Command } = require('../../Core/Classes/Command.js'); 
const { defaultColor, error } = require('../../Core/Utils/Global.js'); 
const { formatDate } = require('../../Core/Utils/Functions.js'); 

class Channel extends Command { 
    constructor(){
        super({
            name: 'channel', 
            module: 'Info', 
            aliases: ['channel-info'], 

            helpDetail: 'Shows information on a channel.', 
            helpUsage: '!channel <channel>', 
            helpExample: '!channel #general\n!channel general'
        })
    }

    async execute(callisto, msg, args) { 
        const channelArgs = args.join(' '); 
        if (!channelArgs) { 
            return callisto.createMessage(msg.channel.id, `${error}Provide a channel!`)
        }
        let channel = false
        msg.channelMentions.filter(c => c.type === 0)
        if(msg.channelMentions.length){channel = msg.channelMentions[0]}
        
        channel = msg.channel.guild.channels.get(channel) 
        if (!channel) { 
            return callisto.createMessage(msg.channel.id, `${error}Invalid channel!`)
        }

        let category = msg.channel.guild.channels.get(channel.parentID)
        if (!category) { 
            category = 'None'
        }
        
        if (!channel.type === 0 && channel.type === 5) { 
            return callisto.createMessage(msg.channel.id, `${error}Invalid channel!`)
        }

        const types = { 
            0: 'Text Channel', 
            2: 'Voice Channel', 
            4: 'Channel Category', 
            5: 'News Channel', 
            6: 'Store Channel'
        };

        const data = { 
            embed: { 
                color: defaultColor, 
                author: { 
                    name: 'Channel Information'
                }, 
                footer: { 
                    text: `Channel ID: ${channel.id}`
                }, 
                timestamp: new Date, 
                fields: [ 
                    { 
                        name: 'Name', 
                        value: channel.name, 
                        inline: true
                    }, 
                    { 
                        name: `ID`, 
                        value: channel.id, 
                        inline: true
                    }, 
                    { 
                        name: 'Mention', 
                        value: channel.mention, 
                        inline: true 
                    }, 
                    { 
                        name: 'NSFW', 
                        value: channel.nsfw ? 'Yes' : 'No', 
                        inline: true 
                    }, 
                    { 
                        name: 'Category', 
                        value: category.name || 'None', 
                        inline: true 
                    }, 
                    { 
                        name: 'Type', 
                        value: types[channel.type], 
                        inline: true 
                    }, 
                    { 
                        name: 'Channel Position', 
                        value: channel.position, 
                        inline: true 
                    },
                    { 
                        name: 'Creation Date', 
                        value: formatDate(channel.createdAt), 
                        inline: true 
                    }, 
                    { 
                        name: 'Topic',
                        value: channel.topic || 'None', 
                        inline: true
                    }
                ]
            }
        }

        callisto.createMessage(msg.channel.id, data); 
    }
}
module.exports.cmd = Channel;