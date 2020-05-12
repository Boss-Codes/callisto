/* 
* Callisto 
* Copyright 2020 @boss#0001
*/

/* Eris */
const { Client, Collection } = require('eris'); 
const { Command } = require('./classes/Command.js')
const { config } = require('dotenv'); 
const { fs, readdir, readdirSync } = require('fs'); 
config({
    path: __dirname + '/.env'
});
const callisto = new Client(process.env.TOKEN,{
    disableEveryone: true, 
    getAllUsers: true, 
    messageLimit: 100,
    restMode: true
});

module.exports.callisto = callisto;

/* New collections for stuff */
callisto.commands = new Collection(Command)
callisto.aliases = new Collection();
callisto.events = new Collection(); 
callisto.categories = readdirSync('./commands')

/* Command Handler */
readdirSync(`./commands/`).forEach(dir => { 
    const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'))

    for (let file of commands) { 
        let pull = require(`./commands/${dir}/${file}`)
        let CmdClass = new pull.cmd()
        callisto.commands.add(CmdClass)
        
    }
    

})
console.log(`[Callisto] Loaded Commands`)

/* Event Handler */ 
    const events = readdirSync(`./events/`).filter(file => file.endsWith('.js')); 
    for (let file of events) { 
        const evt = require(`./events/${file}`)
    }; 

console.log(`[Callisto] Events Loaded`)

/* Login */
callisto.connect()

