const { Command } = require('../../Core/Classes/Command.js'); 
const { defaultColor } = require('../../Core/Utils/Global.js'); 
const snekfetch = require('snekfetch')

class Dog extends Command { 
    constructor(){
        super({
            name: 'dog', 
            module: 'Fun', 
            aliases: ['doggie', 'doggy', 'doge', 'woof'],

            userperms: 'User', 
            helpDetail: 'Shows a random dog image.', 
            helpUsage: `!dog`
        })
    }

    async execute(callisto, msg) {
        const { body } = await snekfetch.get('https://some-random-api.ml/img/dog')
        
        const tweet = { 
            embed: { 
                author: { 
                    name: '🐶 Woof Woof! 🐶'
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
module.exports.cmd = Dog;