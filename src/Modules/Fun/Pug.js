const { Command } = require('../../Core/Classes/Command.js'); 
const { defaultColor } = require('../../Core/Utils/Global.js'); 
const snekfetch = require('snekfetch')

class Pug extends Command { 
    constructor(){
        super({
            name: 'pug', 
            module: 'Fun', 
            aliases: ['carti'],

            userperms: 'User', 
            helpDetail: 'Shows a random pug image.', 
            helpUsage: `!pug`
        })
    }

    async execute(callisto, msg) {
        const { body } = await snekfetch.get('https://dog.ceo/api/breed/pug/images/random')
        
        const tweet = { 
            embed: { 
                author: { 
                    name: 'Here is your pug!'
                },
                color: defaultColor, 
                image: { 
                    url: body.message
                }
            }
        }

        callisto.createMessage(msg.channel.id, tweet)
    }
}
module.exports.cmd = Pug;