const { Command } = require('../../Core/Classes/Command.js'); 
const { error } = require('../../Core/Utils/Global.js')

class Help extends Command { 
    constructor(name, description, usage, example, aliases, module){
        super('help', 'Lists the bot\'s Commands', '!help [command]', '!help ping', 'User', ['h'], 'Info')
    }

    async execute(callisto, msg, args) { 
        const infoCommands = callisto.commands.filter(c => c.module === 'Info');
        if (!args.length) {
        
        return callisto.createMessage(msg.channel.id, {
        
            embed: {
                author: { 
                    name: 'Callisto | Help'
                },
                thumbnail: {url: callisto.user.avatarURL},
                color: 3455723,
                fields: [
                    {
                        name: 'Info', 
                        value: infoCommands.map(c => c.name).join(', ')
                    }, 
                    
                ]
              
                }

            })

        }

        const foundCommand = callisto.commands.get(args[0].toLowerCase()); 
        if (!foundCommand || foundCommand.module === 'Dev') {
            return callisto.createMessage(msg.channel.id, {
        
                embed: {
                    author: { 
                        name: 'Callisto | Help'
                    },
                    thumbnail: {url: callisto.user.avatarURL},
                    color: 3455723,
                    fields: [
                        {
                            name: 'Info', 
                            value: infoCommands.map(c => c.name).join(', ')
                        }, 
                        
                    ]
                  
                    }
    
                })

        } 
        let desc = `**Description:** ${foundCommand.description}\n**Permission Required:** ${foundCommand.permissions}\n**Aliases:** ${foundCommand.aliases.join(',')}\n**Usage:** ${foundCommand.usage}`
        if (foundCommand.example) desc = `**Description:** ${foundCommand.description}\n**Permission Required:** ${foundCommand.permissions}\n**Aliases:** ${foundCommand.aliases.join(',')}\n**Usage:** ${foundCommand.usage}\n**Examples:** ${foundCommand.example}`
        return callisto.createMessage(msg.channel.id, {
            embed: { 
                title: `Help: !${foundCommand.name}`,
                thumbnail: {url: callisto.user.avatarURL},
                description: desc,
                color: 3455723,
                footer: { 
                    text: `Syntax: <> = required | [] = optional`
                }
            }
        })
    
        }
    }



module.exports.cmd = Help;

