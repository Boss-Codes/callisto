const { Command } = require('../../Core/Classes/Command.js'); 
const { error } = require('../../Core/Utils/Global.js'); 
const { resolveUser } = require('../../Core/Utils/Resolvers.js')

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
        let guild = msg.member.guild
        let member = resolveUser(guild, msg, args.join(' ')); 

        if(!args.length) { 
            member = msg.member
        }

        if(!member) { 
            return callisto.createMessage(msg.channel.id, `${error}Invalid user!`)
        }
    }
}