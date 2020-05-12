const { Command } = require('../../classes/Command.js'); 

class Help extends Command { 
    constructor(name, description, usage, example, aliases, module){
        super('help', 'Lists the bot\'s Commands', '!help [command]', '!help ping', ['h'], 'Info')
    }

    async execute(callisto, msg, args) { 

        
    }
}

module.exports.cmd = Help;

