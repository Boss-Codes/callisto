const { Command } = require('../../classes/Command.js'); 

class Ping extends Command { 
    constructor(name, description, usage, module){
    super('ping', 'Pings the bot', '!ping', null, null, ['pong'], 'info')
    }

    async execute(callisto, msg) { 
        let time = Date.now(); 
        let m = await callisto.createMessage(msg.channel.id, 'Pong!'); 
        let now = Date.now()
        m.edit(`Pong! \`${now - time}ms\``)

    }

}

module.exports.cmd = Ping;