const { Command } = require('../../Core/Classes/Command.js'); 
const { defaultColor } = require('../../Core/Utils/Global.js'); 
const snekfetch = require('snekfetch')

class Cat extends Command { 
    constructor(){
        super({
            name: 'panda', 
            module: 'Fun', 

            userperms: 'User', 
            helpDetail: 'Shows a random panda image.', 
            helpUsage: `!panda`
        })
    }

    async execute(callisto, msg) {
        const { body } = await snekfetch.get('https://some-random-api.ml/img/panda')
        
        const tweet = { 
            embed: { 
                title: '<:pandas:713811015355203584> Here is your panda! <:pandas:713811015355203584>',
                color: defaultColor, 
                image: { 
                    url: body.link
                }
            }
        }

        callisto.createMessage(msg.channel.id, tweet)
    }
}
module.exports.cmd = Cat;