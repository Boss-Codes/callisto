const eris = require('eris'); 
const { callisto } = require('../main.js'); 
let logTime = new Date().toLocaleTimeString(); 
let logDate = new Date().toLocaleDateString()
callisto.on('ready', async () => { 
    callisto.editStatus('online', {name: 'users run !help', type: 2})
    
    callisto.executeWebhook('698643966228431009', 'M6SS-bj4r-A87B4ExjlCNiYuMzmwAt92OhaoK3YVXQD6F6DoLg5X_-rjFypR9EBtvIZ4', { 

            embeds: [
             {
                author: { 
                    name: 'Ready', 
                    icon_url: callisto.user.avatarURL
                }, 
                color: '0162255',
    
                description: `Connected to Discord!\n**Guilds:** ${callisto.guilds.size}\n**Users:** ${callisto.users.size}\n**Time:** ${logDate} (${logTime})`
              }
            ]
        


        
    })
console.log(`[Callisto] [${logDate}] Connected to Discord`)
})

