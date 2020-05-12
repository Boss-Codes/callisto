const { GuildModel } = require('../Database/Models.js'); 
const { callisto } = require('../main.js'); 
callisto.on('guildCreate', async guild => { 
    const guildThing = new GuildModel({guildID: guild.id})
    await guildThing.save()
    const owner = callisto.users.get(guild.ownerID)
})