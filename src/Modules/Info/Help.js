const { Command } = require('../../Core/Classes/Command.js'); 
const { error, defaultColor } = require('../../Core/Utils/Global.js')

class Help extends Command { 
    constructor(){
        super({
            name: 'help', 
            module: "Info", 
            aliases: ['h'], 

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
                color: `${defaultColor}`,
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
                    color: `${defualtColor}`,
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
        if (foundCommand.helpExample) desc = `**Description:** ${foundCommand.helpDetail}\n**User Permission Required:** ${foundCommand.userperms}\n**Aliases:** ${foundCommand.aliases.join(', ')}\n**Usage:** ${foundCommand.helpUsage}\n**Examples:** ${foundCommand.helpExample}`
        if (foundCommand.botperms) desc = `**Description:** ${foundCommand.helpDetail}\n**User Permission Required:** ${foundCommand.userperms}\n**Bot Permissions Required:** ${foundCommand.botperms}\n**Aliases:** ${foundCommand.aliases.join(', ')}\n**Usage:** ${foundCommand.helpUsage}\n**Examples:** ${foundCommand.helpExample}`
        return callisto.createMessage(msg.channel.id, {
            embed: { 
                title: `Help: !${foundCommand.name}`,
                description: desc,
                color: `${defualtColor}`,
                footer: { 
                    text: `Syntax: <> = required | [] = optional`
                }
            }
        })
    
        }
    }



module.exports.cmd = Help;