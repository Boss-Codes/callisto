module.exports = { 
    name: 'ping', 
    description: 'Pings the bot', 
    category: 'info', 
    aliases: ['pong'], 
    run: async (callisto, msg) => { 
        console.log('Hi')
        let time = Date.now()
        let m = callisto.createMessage(msg.channel.id, 'Ping!'); 
        let now = Date.now()
        m.edit(`Pong! \`${now - time}ms\``); 
    }
}