const { Command } = require('../../Core/Classes/Command.js'); 

class Eval extends Command { 
    constructor(){
        super({
            name: 'eval', 
            module: "Dev", 
            aliases: ['e', 'evaluate'], 

            userperms: 'Developer', 
            botperms: null,
            helpDetail: 'Evaluates JavaScript Code', 
            helpUsage: '!eval <code>', 
            helpExample: '!eval callisto.guilds.size' 
        });
    }
    
    async execute(callisto, msg, args) { 
        if(!process.env.OWNER_ID.includes(msg.author.id)) return; 
        const content = msg.content.split(' ').slice(1).join(' ');
            const result = new Promise((resolve, reject) => resolve(eval(content)));

        return result.then(output => { 
            if(typeof output !== 'string') output = require('util').inspect(output, { 
                depth: 0
            });
            if (output.includes(callisto.token)) output = output.replace(callisto.token, "Sorry sir/ma'am, I cannot do that."); 
            if (output.length > 1990) console.log(output), output = 'The result of this eval is over 2000 characters long and cannot be sent, check the console for the output.'

            return callisto.createMessage(msg.channel.id, `\`\`\`js\n${output}\`\`\``); 
            }).catch(err => { 
                console.error(err); 
                err = err.toString(); 

                if (err.includes(callisto.token)) err = err.replace(callisto.token, "So sorry sir/ma'am, cannot give you that information."); 

                return callisto.createMessage(msg.channel.id, `\`\`\`js\n${err}\`\`\``); 
            });
}
}

module.exports.cmd = Eval;