const { Schema, model } = require('mongoose')

const GuildModel = new Schema({
    guildID: String, 
    prefix: {
        type: String,
        default: '!'
    },
    modlogChannel: String,
    welcomeChannel: String,
    loggingChannel: String,
    messageLogChannel: String, 
    welcomeMessage: { 
        type: String,
        default: "Welcome {user} to {server}!"
    }, 
    modRoles: Array,
    memberLogChannel: String, 
    reportChannel: String

}); 

module.exports = model('Callisto', GuildModel)