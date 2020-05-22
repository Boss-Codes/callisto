const model = require('../MongoDB/Models.js'); 
const { callisto } = require('../../main.js'); 
const config = require('../../config.json')

callisto.on('messageCreate', async msg => { 
    let db = await model.findOne({guildID: msg.channel.guild.id})
    let prefix = db.prefix;
    if (!prefix) { 
        prefix = '!'
    }
    let devPrefix = '$'

    if (msg.author.bot) return; 
    if(msg.content.startsWith(devPrefix) && msg.author.id === config.owners ? prefix = '$' : prefix = prefix)
    if(!msg.content.startsWith(prefix)) return
    const messageArray = msg.content.split(' ')
    const commandName = messageArray[0]
    const args = messageArray.slice(1)
    const command = callisto.commands.get(commandName.toLowerCase().slice(prefix.length)) || 
    callisto.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName.toLowerCase().slice(prefix.length)))
    if (commandName.length === 0) return; 
    if (!command) return; 
    if (!msg.channel.guild) return;
    if(command) command.execute(callisto, msg, args)



})

