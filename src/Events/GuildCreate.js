const GuildModel = require('../MongoDB/Models.js'); 
const { callisto } = require('../../main.js'); 
const { defaultColor } = require('../Core/Utils/Global.js')

callisto.on('guildCreate', async guild => { 
    const owner = callisto.users.get(guild.ownerID)
    const guildThing = new GuildModel({guildID: guild.id})

    await guildThing.save()

    callisto.executeWebhook('710337395425542206', process.env.GUILD_CREATE_WEBHOOK_TOKEN, { 

        embeds: [
         {
            author: { 
                name: 'Guild Create', 
                icon_url: callisto.user.avatarURL
            }, 
            color: `${defaultColor}`,

            description: `Added to a new guild!\n**Guild:** ${guild.name} (\`${guild.id})\`\n**Owner:** ${owner.username}#${owner.discriminator}\n**Members:** ${guild.members.size}`,
            timestamp: new Date 

          }
        ]
    


    
})
})