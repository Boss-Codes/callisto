const { Command } = require('../../classes/Command.js'); 

class Ping extends Command { 
    constructor(){
    super()
    this.name = 'ping', 
    this.description = 'Pings the bot.', 
    this.usage = '!ping', 
    this.example = null; 
    this.permissions = 'User', 
    this.aliases = ['pong'], 
    this.module = 'Info'
    }

    async execute(callisto, msg) { 
        let time = Date.now(); 
        let m = await callisto.createMessage(msg.channel.id, 'Pong!'); 
        let now = Date.now()
        m.edit(`Pong! \`${now - time}ms\``)

    }

}

module.exports.cmd = Ping;