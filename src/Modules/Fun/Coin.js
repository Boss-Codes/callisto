const { Command } = require('../../Core/Classes/Command.js'); 

class Coin extends Command { 
    constructor(){
        super({
            name: 'coin', 
            module: 'Fun', 
            aliases: ['flip'],

            userperms: 'User', 
            helpDetail: 'Flips a coin.', 
            helpUsage: `!coin`
        })
    }

    async execute(callisto, msg) {
        const sides = ['heads', 'tails']; 
        const result = `${sides[Math.floor(Math.random() * sides.length)]}`

        callisto.createMessage(msg.channel.id, `It landed on ${result}!`)
    }
}
module.exports.cmd = Coin;