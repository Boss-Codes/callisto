const { Command } = require('../../Core/Classes/Command.js'); 
const { defaultColor } = require('../../Core/Utils/Global.js'); 
const snekfetch = require('snekfetch')

class DogFact extends Command { 
    constructor(){
        super({
            name: 'dogfact', 
            module: 'Fun', 
            aliases: ['doggyfact', 'dogefact'],

            userperms: 'User', 
            helpDetail: 'Shows a random dog fact.', 
            helpUsage: `!dogfact`
        })
    }

    async execute(callisto, msg) {
        const { body } = await snekfetch.get('https://some-random-api.ml/facts/dog')

        callisto.createMessage(msg.channel.id, body.fact)
    }
}
module.exports.cmd = DogFact;