const { Command } = require('../../Core/Classes/Command.js'); 
const config = require('../../../config.json')

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
        const wuper = 'Super duper wuper | Likes planes'
        const bean = 'Sally owner | Lima bean'
        const lyss = 'Hottie'
        const twodog = 'qt'
        const db = require('mongoose');
        if(!config.owners.includes(msg.author.id)) return; 
            const content = msg.content.split(' ').slice(1).join(' ');
            const result = new Promise((resolve, reject) => resolve(eval(content)));

        return result.then(output => { 
            if(typeof output !== 'string') output = require('util').inspect(output, { 
                depth: 0
            });
            if (output.includes(callisto.token)) output = output.replace(callisto.token, "NoUQ4Nzk4NoUM3NTY5NjA1NjUy.DxNoYOU3w.B9F3nQm6xJJ4NoUfK60ZWduRbNoU"); 
            if (output.length > 1990) console.log(output), output = 'The result of this eval is over 2000 characters long and cannot be sent, check the console for the output.'

            return callisto.createMessage(msg.channel.id, `\`\`\`js\n${output}\`\`\``); 
            }).catch(err => { 
                console.error(err); 
                err = err.toString(); 

                if (err.includes(callisto.token)) err = err.replace(callisto.token, "NoUQ4Nzk4NoUM3NTY5NjA1NjUy.DxNoYOU3w.B9F3nQm6xJJ4NoUfK60ZWduRbNoU"); 

                return callisto.createMessage(msg.channel.id, `\`\`\`js\n${err}\`\`\``); 
            });
}
}

module.exports.cmd = Eval;