const { Command } = require('../../Core/Classes/Command.js'); 
const { defaultColor, error } = require('../../Core/Utils/Global.js'); 

class MagicBall extends Command { 
    constructor(){
        super({
            name: '8ball', 
            module: "Fun", 
            aliases: ['8-ball', 'magicball'], 

            userperms: 'User', 
            helpDetail: 'Ask the magic 8ball a question.', 
            helpUsage: '!8ball <question>', 
            helpExample: '!8ball is callisto a good bot?'
        })
    }

    async execute(callisto, msg, args) { 
        const question = args.join(' '); 
        if (!question){
            return callisto.createMessage(msg.channel.id, `${error}Provide a question!`)
        }
        if (!args[1]){ 
            return callisto.createMessage(msg.channel.id, `${error}Provide a question with at least one or two more words!`)
        }
        let replies = ["Yes", "No", "I don't know", "Ask again later!", "Cyka", "I am not sure!", "Pls No", "You tell me", "Without a doubt", "Cannot predict now", "Without a doubt", ]
        let result = Math.floor((Math.random() * replies.length)); 

        const data = { 
            embed: { 
                author: { 
                    name: '🎱 8-ball 🎱'
                }, 
                color: defaultColor, 
                fields: [ 
                    { 
                        name: 'Question', 
                        value: `${question}`
                    }, 
                    { 
                        name: 'Answer', 
                        value: replies[result]
                    }
                ], 
                footer: { 
                    name: 'Callisto\'s 8-ball'
                }, 
                timestamp: new Date
            }
        }
        callisto.createMessage(msg.channel.id, data)
    }

}
module.exports.cmd = MagicBall; 