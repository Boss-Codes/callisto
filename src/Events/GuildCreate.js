const { GuildModel } = require('../MongoDB/Models.js'); 
const { callisto } = require('../../main.js'); 
callisto.on('guildCreate', async guild => { 
    const owner = callisto.users.get(guild.ownerID)
    const guildThing = new GuildModel({guildID: guild.id})
    await guildThing.save()
})