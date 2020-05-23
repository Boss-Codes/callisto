const { Command } = require('../../Core/Classes/Command.js'); 
const { defaultColor } = require('../../Core/Utils/Global.js'); 
const snekfetch = require('snekfetch')

class Cat extends Command { 
    constructor(){
        super({
            name: 'cat', 
            module: 'Fun', 
            aliases: ['kitty', 'kittie'],

            userperms: 'User', 
            helpDetail: 'Shows a random cat image.', 
            helpUsage: `!cat`
        })
    }

    async execute(callisto, msg) {
        const { body } = await snekfetch.get('https://some-random-api.ml/img/cat')
        
        const tweet = { 
            embed: { 
                author: { 
                    name: '🐱 Meow! Kitty! uwu 🐱'
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
module.exports.cmd = Cat;