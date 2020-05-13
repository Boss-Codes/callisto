const { Command } = require('../../Core/Classes/Command.js'); 
const { resolveUser } = require('../../Core/Utils/Resolvers.js'); 
const { defaultColor, error } = require('../../Core/Utils/Global.js')

class Avatar extends Command { 
    constructor(name, description, usage, example, permissions, aliases, module){
        super('avatar', 'Displays the avatar of a user', '!avatar [user]', '!avatar @boss', 'User', ['av'], 'Info')
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