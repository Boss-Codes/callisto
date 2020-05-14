const { Command } = require('../../Core/Classes/Command.js'); 
const { error } = require('../../Core/Utils/Global.js')

class Help extends Command { 
    constructor(){
        super({
            name: 'help', 
            module: "Info", 
            aliases: ['h'], 

            userperms: 'User', 
            botperms: null, 
            helpDetail: 'Shows the bot\'s commands or information on a specfic command.', 
            helpUsage: '!help\n!avatar [command]', 
            helpExample: '!help ping'
        });
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
        if (!foundCommand) {
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
        let desc = `**Description:** ${foundCommand.helpDetail}\n**User Permission Required:** ${foundCommand.userperms}\n**Aliases:** ${foundCommand.aliases.join(',')}\n**Usage:** ${foundCommand.helpUsage}`
        if (foundCommand.example && foundCommand.botperms) desc = `**Description:** ${foundCommand.helpDetail}\n**User Permission Required:** ${foundCommand.userperms}\n**Aliases:** ${foundCommand.aliases.join(',')}\n**Usage:** ${foundCommand.helpUsage}\n**Examples:** ${foundCommand.helpExample}`
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