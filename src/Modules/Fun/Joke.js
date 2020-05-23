const { Command } = require('../../Core/Classes/Command.js'); 
let giveMeAJoke = require('give-me-a-joke');

class Joke extends Command { 
    constructor(){
        super({
            name: 'joke', 
            module: 'Fun', 

            userperms: 'User', 
            helpDetail: 'Sends a random joke.', 
            helpUsage: '!joke'
        })
    }

    async execute(callisto, msg, args) { 
        giveMeAJoke.getRandomDadJoke(function(joke){ 
            callisto.createMessage(msg.channel.id, joke)
       })
    }
}

module.exports.cmd = Joke;