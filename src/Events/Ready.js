const eris = require('eris'); 
const { callisto } = require('../../main.js'); 
const { defaultColor } = require('../Core/Utils/Global.js')
let logTime = new Date().toLocaleTimeString(); 
let logDate = new Date().toLocaleDateString()
callisto.on('ready', async () => { 
    callisto.editStatus('online', {name: 'users run !help', type: 2})
    
    callisto.executeWebhook('698643966228431009', process.env.READY_WEBHOOK_TOKEN, { 

            embeds: [
             {
                author: { 
                    name: 'Ready', 
                    icon_url: callisto.user.avatarURL
                }, 
                color: `${defaultColor}`,
    
                description: `Connected to Discord!\n**Guilds:** ${callisto.guilds.size}\n**Users:** ${callisto.users.size}\n**Time:** ${logDate} (${logTime})`
              }
            ]
        


        
    })
return console.log(`[Callisto] [${logTime}] Connected to Discord`)
})

