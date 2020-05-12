const { Schema, model } = require('mongoose')

const GuildModel = new Schema({
    prefix: {
        type: String,
        default: '!'
    }, 
    guildID: String, 
})

module.exports = model('Callisto', GuildModel)