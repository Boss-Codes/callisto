const { Command } = require('../../Core/Classes/Command.js'); 
const { defaultColor } = require('../../Core/Utils/Global.js'); 
const snekfetch = require('snekfetch')

class Bird extends Command { 
    constructor(){
        super({
            name: 'bird', 
            module: 'Fun', 
            aliases: ['birb', 'flatbird', 'birdie'],

            userperms: 'User', 
            helpDetail: 'Shows a random bird image.', 
            helpUsage: `!bird`
        })
    }

    async execute(callisto, msg) {
        const { body } = await snekfetch.get('https://some-random-api.ml/img/birb')
        
        const tweet = { 
            embed: { 
                author: { 
                    name: '🐤 Tweet, here is your random birb! 🐤'
                },
                color: defaultColor, 
                image: { 
                    url: body.link
                }
            }
        }

        callisto.createMessage(msg.channel.id, tweet)
    }
}
module.exports.cmd = Bird;