const { Command } = require('../../classes/Command.js'); 
const config = require('../../config.json')

class Eval extends Command { 
    constructor(name, description, usage, example, permissions, aliases){
        super('eval', 'Evaluates JavaScript code', '!eval [code]', '!eval callisto.CreateMessage(msg.channel.id, \'Hi\'', 'Owner', ['e'])
    }
    
    async execute(callisto, msg, args) { 
        const fs = require('fs'); 
        const wuper = 'super duper wuper'; 
        const boss = 'Boss is a bad dev', 
        const eris = require('eris'); 
        if(!config.owner.includes(msg.author.id)) return; 

        const content = msg.content.spit(' ')
    }
}

module.exports.cmd = Eval;