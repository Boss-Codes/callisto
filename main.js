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
})

/* New collections for stuff */
callisto.commands = new Collection();
callisto.aliases = new Collection();
callisto.events = new Collection(); 

callisto.categories = readdirSync('./commands')
callisto.eventCategories = readdirSync('./events')

/* Command Handler */
readdirSync('./commands/').forEach(dir => { 
    const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js')); 

    for (let file of commands) { 
        let pull = require(`./commands/${dir}/${file}`); 
        if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name)); 
        if (pull.name) { 
            callisto.commands.set(pull.name, pull); 
        }
            continue; 
        }
      });
      console.log(`[Callisto] Commands Loaded`)

/* Event Handler */ 
readdirSync('./events/').forEach(dir => { 
    const events = readdirSync(`./events/`).filter(file => file.endsWith('.js')); 
    for (let file of events) { 
        const evt = require(`./events/${file}`)
        let eName = file.split('.')[0]
        callisto.on(eName, evt.bind(null, callisto))
    }

    for (let file of events) { 
        let pull = require(`./events/${file}`); 
    }
    console.log(`[Callisto] Events Loaded`)

});


/* Login */
callisto.connect()

