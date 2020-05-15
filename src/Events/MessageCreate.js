const moment = require('moment');
const model = require('../MongoDB/Models.js'); 
const { callisto } = require('../../main.js'); 

callisto.on('messageCreate', async msg => { 
    let prefix = '!';
    let devPrefix = '$'
    const args = msg.content.slice(prefix.length).trim().split(/ +/g); 
    const cmd = args.shift().toLowerCase(); 
    let command = callisto.commands.get(cmd) || callisto.commands.find(c => c.aliases && c.aliases.includes(cmd)); `    `
    if(!command) command = callisto.commands.get(callisto.aliases.get(cmd)); 
    if (cmd.length === 0) return; 
    if (!command) return; 
    if (!msg.channel.guild) return;
   
    if (msg.content.startsWith(prefix)) { 
            command.execute(callisto, msg, args)
        } else{
            if (msg.content.startsWith(devPrefix)) { 
            if (msg.author.id == '344954369285947392') 
                command.execute(callisto, msg, args)
            }
        }
    
    if (msg.author.bot) return; 


    if (command) { 
        
    }
})

