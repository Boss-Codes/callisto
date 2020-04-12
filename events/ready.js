const eris = require('eris'); 

module.exports = async (callisto, msg) => {

    callisto.editStatus({
        status: 'online', 
        game: { 
            name: 'Users run !help', 
            type: 'LISTENING'
        }
    })
    
    callisto.executeWebhook('698643966228431009', 'M6SS-bj4r-A87B4ExjlCNiYuMzmwAt92OhaoK3YVXQD6F6DoLg5X_-rjFypR9EBtvIZ4', { 

            embeds: [
             {
                author: { 
                    name: 'Ready', 
                    icon_url: callisto.user.avatarURL
                }, 
                color: '0162255',
    
                fields: [
                    { 
                        name: 'Username', 
                        value: `${callisto.user.username}#${callisto.user.discriminator}`
                    }, 
                    { 
                        name: 'Guild Count', 
                        value: callisto.guilds.size
                        
                    }, 
                    { 
                        name: 'User Count', 
                        value: callisto.users.size
                    }, 
                    { 
                        name: 'Time', 
                        value: `${new Date()}`
                    }
                ]
              }
            ]
        


        
    })
console.log(`[Callisto] Connected to Discord`)
}
