/* 
* Callisto 
* Copyright 2020 @boss#0001
*/

/* Eris */
const { Client, Collection } = require('eris'); 
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
})

/* New collections for stuff */
callisto.commands = new Eris.Collection(Command)
callisto.aliases = new Collection();
callisto.events = new Collection(); 
callisto.categories = readdirSync('./commands')

/* Command Handler */


/* Event Handler */ 
    const events = readdirSync(`./events/`).filter(file => file.endsWith('.js')); 
    for (let file of events) { 
        const evt = require(`./events/${file}`)
        let eName = file.split('.')[0]
        callisto.on(eName, evt.bind(null, callisto))
    }; 

console.log(`[Callisto] Events Loaded`)

/* Login */
callisto.connect()

