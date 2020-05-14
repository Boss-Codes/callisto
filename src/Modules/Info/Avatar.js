const { Command } = require('../../Core/Classes/Command.js'); 
const { resolveUser } = require('../../Core/Utils/Resolvers.js'); 
const { defaultColor, error } = require('../../Core/Utils/Global.js')

class Avatar extends Command { 
    constructor(){
        super({
            name: 'avatar', 
            module: "Info", 
            aliases: ['av'], 

            helpDetail: 'Shows a user\'s avatar.', 
            helpUsage: '!avatar\n!avatar [user]', 
            helpExample: '!avatar @boss'
        });
    }

    async execute(callisto, msg, args) {
        let guild = msg.member.guild;
        let member = resolveUser(guild, msg, args.join(' ')); 
        
        if(!args.length) { 
            member = msg.member
        }

        if(!member) { 
        return callisto.createMessage(msg.channel.id, `${error}Invalid user!`)
        }
        callisto.createMessage(msg.channel.id, { 
            embed: { 
                author: { 
                    name: `${member.username}#${member.discriminator}`, 
                    icon_url: `${member.avatarURL}`
                }, 
                color: `${defaultColor}`, 
                image: { 
                    url: member.avatarURL
                }, 
                timestamp: new Date 
                
            }
        })
    }
}
module.exports.cmd = Avatar;