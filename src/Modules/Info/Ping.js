const { Command } = require('../../Core/Classes/Command.js'); 

class Ping extends Command { 
    constructor(){
        super({
            name: 'ping', 
            module: "Info", 
            aliases: ['pong'], 

            userperms: 'User', 
            botperms: null, 
            helpDetail: 'Pings the bot.', 
            helpUsage: '!ping', 
            helpExample: null 
        });
    }

    async execute(callisto, msg) { 
        let time = Date.now(); 
        let m = await callisto.createMessage(msg.channel.id, 'Pong!'); 
        let now = Date.now()
        m.edit(`Pong! \`${now - time}ms\``)

    }

}

module.exports.cmd = Ping;