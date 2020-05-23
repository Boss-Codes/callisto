const { Command } = require('../../Core/Classes/Command.js'); 
const { defaultColor, error } = require('../../Core/Utils/Global.js'); 
const { resolveUser } = require('../../Core/Utils/Resolvers.js'); 
const snekfetch = require('snekfetch'); 

class Hug extends Command { 
    constructor(){
        super({
            name: 'hug', 
            module: 'Fun', 

            userperms: 'User', 
            helpDetail: 'Hugs a user.', 
            helpUsage: '!hug <user>', 
            helpDetail: '!hug @boss'
        })
    }

    async execute(callisto, msg, args) { 
        const guild = msg.member.guild;
        let member = resolveUser(guild, msg, args.join(' ')); 
        if (!member) { 
            return callisto.createMessage(msg.channel.id, `${error}You cannot hug the air!`)
        }
        if (member.id === msg.member.id) { 
            return callisto.createMessage(msg.channel.id, `${error}You cannot hug yourself!`)
        }
       
        const { body } = await snekfetch.get('https://some-random-api.ml/animu/hug')

        const hug = { 
            embed: { 
                description: `<@${msg.member.id}> hugged <@${member.id}>`, 
                color: defaultColor, 
                image: { 
                    url: body.link
                }, 
                footer: { 
                    text: '❤️ Love!'
                }, 
                timestamp: new Date
            }
        }

        callisto.createMessage(msg.channel.id, hug)
    }

}
module.exports.cmd = Hug;