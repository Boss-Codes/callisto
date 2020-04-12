const moment = require('moment');


module.exports = async (callisto, msg) => { 
    
    if (msg.author.bot) return; 
    if (!msg.channel.guild) return; 
    let prefix = '!'
    let devPrefix = '$'

   
    const args = msg.content.slice(prefix.length).trim().split(/ +/g); 
    const cmd = args.shift().toLowerCase(); 
    let command = callisto.commands.get(cmd); 
    if(!command) command = callisto.commands.get(callisto.aliases.get(cmd)); 

    if (msg.content.startsWith(prefix)) { 
        command.run(callisto, msg, args)
    } else{
        if (msg.content.startsWith(devPrefix)) { 
        if (msg.author.id == '344954369285947392') 
            command.run(callisto, msg, args)
        }
    }
    if (!msg.member) msg.member = await msg.cahnnel.guild.members.get(msg);

    if (cmd.length === 0) return; 

    if(!command) command = callisto.commands.get(callisto.aliases.get(cmd)); 

    if (!command) return; 

    if (command) { 
        callisto.executeWebhook('698702660970348585', 'Bw1aSpxrK8SOxPj0K7HT3Hh_-uq8dXiKB3Ic0JDyHkvTnHYB8DS1ICbKHF1eQbPKfu64', { 

            embeds: [
             {
                author: { 
                    name: 'New Command Ran', 
                    icon_url: callisto.user.avatarURL
                }, 
                color: '232550',
    
                fields: [
                    { 
                        name: 'Command', 
                        value: `${command.name}`
                    }, 
                    { 
                        name: 'Ran By', 
                        value: `${msg.author.username}#${msg.author.discriminator} (${msg.author.id})`
                        
                    }, 
                    { 
                        name: 'Ran in Guild', 
                        value: `${msg.channel.guild.name} (${msg.channel.guild.id})`
                    },
                    {
                        name: 'Ran in Channel', 
                        value: `${msg.channel.name} (${msg.channel.id})`
                    },
                    { 
                        name: 'Time', 
                        value: `${new Date()}`
                    }
                ]
              }
            ]
        


        
    })
    }
};

/*if(msg.content.startsWith(prefix)){
...
}else{
if(msg.content.startsWith(devPrefix)){
  if(msg.author.id !== config.owner){return;}
...
}
return;*/