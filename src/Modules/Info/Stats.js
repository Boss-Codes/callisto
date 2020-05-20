const { Command } = require('../../Core/Classes/Command.js'); 
const { defaultColor, version, modules } = require('../../Core/Utils/Global.js'); 
const { os } = require('os');

class Stats extends Command { 
    constructor(){
        super({
            name: 'stats', 
            module: 'Info', 
            aliases: ['info', 'botinfo', 'botinformation'], 

            helpDetail: 'Shows bot information.', 
            helpUsage: `!stats`
        })
    }

    async execute(callisto, msg) { 
        let rawuptime = callisto.uptime;
        let sseconds = (Math.round(rawuptime / 1000));
        let days = Math.floor(Math.round(sseconds / 86400));
        let hours = Math.floor(Math.round(sseconds / 3600));
        sseconds %= 3600;
        let minutes = Math.floor(Math.round(sseconds / 60));
        let seconds = sseconds % 60;

        const data = { 
            embed: { 
                author: { 
                    name: callisto.user.username, 
                    icon_url: callisto.user.avatarURL
                }, 
                color: defaultColor, 
                footer: { 
                    text: `Uptime: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`, 
                    icon_url: callisto.user.avatarURL
                },
                timestamp: new Date, 
                fields: [ 
                    { 
                        name: 'Version', 
                        value: version, 
                        inline: true
                    },
                    { 
                        name: 'Modules', 
                        value: modules, 
                        inline: true
                    }, 
                    { 
                        name: 'Commands', 
                        value: callisto.commands.size, 
                        inline: true
                    },
                    { 
                        name: 'Developer', 
                        value: 'boss#0001', 
                        inline: true
                    }, 
                    { 
                        name: 'Servers', 
                        value: callisto.guilds.size, 
                        inline: true
                    }, 
                    { 
                        name: 'Users', 
                        value: callisto.users.size, 
                        inline: true
                    }, 
                    { 
                        name: 'Operating System', 
                        value: `Linux - Debian 4.19.98-1`, 
                        inline: true
                    }, 
                    { 
                        name: 'Support Server', 
                        value: `[Join Here](https://discord.gg/35CGyyv)`, 
                        inline: true
                    },
                    { 
                        name: 'Invite Link', 
                        value: `[Invite Here](https://discordapp.com/oauth2/authorize?client_id=625180461551058964&scope=bot&permissions=8)`,
                        inline: true
                    }
                    
                ]
            }
        }

        callisto.createMessage(msg.channel.id, data)
    }
}
module.exports.cmd = Stats;