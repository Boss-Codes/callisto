const { Command } = require('../../Core/Classes/Command.js'); 
const { defaultColor } = require('../../Core/Utils/Global.js'); 
const snekfetch = require('snekfetch')

class Dog extends Command { 
    constructor(){
        super({
            name: 'meme', 
            module: 'Fun', 
            aliases: ['dankmeme', 'xd', 'XD', 'xD'],

            userperms: 'User', 
            helpDetail: 'Shows a random meme.', 
            helpUsage: `!meme`
        })
    }

    async execute(callisto, msg) {
        const { body } = await snekfetch.get('https://some-random-api.ml/meme')
        
        const tweet = { 
            embed: { 
                author: { 
                    name: body.caption
                },
                color: defaultColor, 
                image: { 
                    url: body.image
                }
            }
        }

        callisto.createMessage(msg.channel.id, tweet)
    }
}
module.exports.cmd = Dog;