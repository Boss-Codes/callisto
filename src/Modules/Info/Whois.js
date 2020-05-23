const { Command } = require('../../Core/Classes/Command.js'); 
const { userError, defaultColor, online, idle, offline, dnd } = require('../../Core/Utils/Global.js'); 
const { resolveUser } = require('../../Core/Utils/Resolvers.js')
const { formatDate } = require('../../Core/Utils/Functions.js'); 

class Whois extends Command { 
    constructor(){ 
        super({ 
            name: 'whois', 
            module: 'Info', 
            aliases: ['w', 'userinfo', 'user'], 

            userperms: 'User' , 
            helpDetail: 'Shows information on a user.', 
            helpUsage: '!whois\n!whois [user]', 
            helpExample: '!whois @boss'
        }); 
    }

    async execute(callisto, msg, args) { 
        /* Defining guild and member  */
        let guild = msg.member.guild
        let member = resolveUser(guild, msg, args.join(' ')); 
        
        /* Checking if member exists and if there are no args */
        if(!args.length) { 
            member = msg.member
        }
        if(!member) { 
            return callisto.createMessage(msg.channel.id, `${userError}`)
        }

        /* Checking the user permissions for "Key Permissions" */
        function checkUserPermissions(guild, member) { 
            const arrayOfPerms = []; 

            if (member.permission.has('administrator')) { 
                arrayOfPerms.push('Administrator')
            }
            if (member.permission.has('manageGuild')) { 
                arrayOfPerms.push('Manage Server')
            }
            if (member.permission.has('manageRoles')) { 
                arrayOfPerms.push('Manage Roles')
            }
            if (member.permission.has('manageChannels')) { 
                arrayOfPerms.push('Manage Channels')
            }
            if (member.permission.has('viewAuditLogs')) { 
                arrayOfPerms.push('View Audit Logs')
            }
            if (member.permission.has('kickMembers')) { 
                arrayOfPerms.push('Kick Members')
            }
            if (member.permission.has('banMembers')) { 
                arrayOfPerms.push('Ban Members')
            }
            if (member.permission.has('manageNicknames')) { 
                arrayOfPerms.push('Manage Nicknames') 
            }
            if (member.permission.has('manageEmojis')) { 
                arrayOfPerms.push('Manage Emojis')
            }
            if (member.permission.has('manageWebhooks')) { 
                arrayOfPerms.push('Manage Webhooks')
            }
            if (member.permission.has('manageMessage')) { 
                arrayOfPerms.push('Manage Messages')
            }
            if (member.permission.has('mentionEveryone')) { 
                arrayOfPerms.push('Mention Everyone')
            }
            return arrayOfPerms; 
        }

        /* Acknowledgments */
        function userAcks(member) { 
            var ackArray = []
            if (member.id == '344954369285947392') { 
                ackArray.push('Owner, Developer, Bot Administrator')
            }
            if (member.id == '625180461551058964') { 
                ackArray.push('The OG Team Member')
            }
            if (member.id == '325087287539138560') { 
                ackArray.push('PRINCESS B.I.T.C.H., Dyno Lyss!, Cutie') 
            }
            if (member.id == '489989456175300618') { 
                ackArray.push('Wuper Wednesday, Plane Lover, Contributor')
            }      
            if (member.id == '253233185800847361') { 
                ackArray.push('Lima Beans, Sally Owner, Contributor')
            }
            if (member.id == '473949538084716554') { 
                ackArray.push ('Cutie, Conor™️')
            }        
            if (member.id == '322996242521260042') { 
                ackArray.push('Broken, Cutie')
            }
            if (member.id == '123261299864895489') { 
                ackArray.push('K9QT, Sexy Beast, Two Doggy')
            }
            if (member.id == '216860258071478275') { 
                ackArray.push('🚚, Cutie')
            }
            if (member.id == '334093318818627586') { 
                ackArray.push('3.14, Cutie')
            }
            if (member.id == '77205340050956288') { 
                ackArray.push('Designer, Hot Pug, Cutie')
            }
            if (member.id == '252541269602074635') { 
                ackArray.push('Chocolate Chipped, Cutie')
            }
            if (member.id == '395526710101278721') { 
                ackArray.push('DBL Moderator, Best Mod, Cutie')
            }
            return ackArray; 
        }
        /* Server Moderator, Manager, and Administrator */
        let aPerms = void 0; 
        if (member.permission.has('manageMessages')) { 
            aPerms = 'Server Moderator'
        }
        if (member.permission.has('manageGuild')) { 
            aPerms = 'Server Manager'
        }
        if (member.permission.has('administrator')) { 
            aPerms = 'Server Administrator'
        }
        if (member.id === msg.channel.guild.ownerID) { 
            aPerms = 'Server Owner'
        }

        /* Defining a few things to make it easier */
        const roles = []; 
        member.roles.forEach(r => roles.push(msg.channel.guild.roles.get(r))); 
        const sortedRoles = roles.sort((a, b) => b.position - a.position);
        const roleList = sortedRoles.map(r => r.mention).join(', ')
        const createdAt = formatDate(member.createdAt); 
        const joined = formatDate(member.joinedAt)
        const status = member.status;

       
        /* Embed Time */
        const data = { 
            embed: { 
                thumbnail: { 
                    url: member.avatarURL
                },
                author: { 
                    name: `${member.username}#${member.discriminator}`, 
                    icon_url: member.avatarURL
                },
                timestamp: new Date, 
                color: `${defaultColor}`, 
                footer: { 
                    text: `ID: ${member.id}`
                }, 
                fields: [ 
                    { 
                        name: 'Registered', 
                        value: `${createdAt}`, 
                        inline: true
                    }, 
                    { 
                        name: 'Joined', 
                        value: `${joined}`, 
                        inline: true
                    }, 
                   
                    
                ]
            }
        }
        /* If Statements for the embed */
        if(!member.nick){
            data.embed.description = `${member.username}#${member.discriminator}\n${member.mention}`
        }else { 
            data.embed.description = `${member.username}#${member.discriminator} (${member.nick})\n${member.mention}`
        }

        if (member.status == 'online') { 
            data.embed.fields.push({
                name: 'Status', 
                value: `${status} ${online}`, 
                inline: true
            })
        }
        if (member.status == 'idle') { 
            data.embed.fields.push({
                name: 'Status', 
                value: `${status} ${idle}`, 
                inline: true
            })
        }
        if (member.status == 'dnd') { 
            data.embed.fields.push({
                name: 'Status', 
                value: `${status} ${dnd}`, 
                inline: true
            })
        }
        if (member.status == 'offline') { 
            data.embed.fields.push({
                name: 'Status', 
                value: `${status} ${offline}`
            })
        }

        if(member.roles.size == 0){
            data.embed.fields.push({
                name: `Roles [0]`, 
                value: 'None'
            })
        }else { 
            data.embed.fields.push({
                name: 'Roles [' + (roles.length) + ']',
                value: '' + `${roleList}`
            })
        }

        if (checkUserPermissions(msg.channel.guild, member).length > 0) { 
            data.embed.fields.push({
                name: 'Key Permissions', 
                value: '' + checkUserPermissions(msg.channel.guild, member).join(', ')
            })
        }

        if (aPerms) { 
            data.embed.fields.push({
                name: 'Acknowledgements', 
                value: `${aPerms}`
            })
        }

        if (userAcks(member).length) { 
            data.embed.fields.push({
                name: 'Special Acknowledgements', 
                value: '' + userAcks(member).join(', ')
            })
        }

        /* Send Message */
        callisto.createMessage(msg.channel.id, data); 



        


       
    }
}
module.exports.cmd = Whois;﻿