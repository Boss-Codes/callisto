const mongoose = require('mongoose'); 
let logDate = new Date().toLocaleTimeString(); 
mongoose.connect('mongodb+srv://boss:callisto@callisto-9jnvm.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(a => {
        console.log(`[Callisto] [${logDate}] Connected to Mongo DB`)
     })