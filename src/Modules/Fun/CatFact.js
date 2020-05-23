const { Command } = require('../../Core/Classes/Command.js'); 
const { defaultColor } = require('../../Core/Utils/Global.js'); 
const snekfetch = require('snekfetch')

class CatFact extends Command { 
    constructor(){
        super({
            name: 'catfact', 
            module: 'Fun', 
            aliases: ['kittiefact', 'kittyfact'],

            userperms: 'User', 
            helpDetail: 'Shows a random cat fact.', 
            helpUsage: `!catfact`
        })
    }

    async execute(callisto, msg) {
        const { body } = await snekfetch.get('https://some-random-api.ml/facts/cat')

        callisto.createMessage(msg.channel.id, body.fact)
    }
}
module.exports.cmd = CatFact;