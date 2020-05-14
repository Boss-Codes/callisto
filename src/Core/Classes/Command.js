class Command { 
    constructor(data) { 
     this.name = data.name ?? "idiot"; 
     this.id = this.name; 
     this.module = data.module ?? "default"; 
     this.aliases = data.aliases ?? []; 
     this.userperms = data.userperms ?? []; 
     this.botperms = data.botperms ?? []; 
     this.helpDetail = data.helpDetail ?? "dummy"; 
     this.helpUsage = data.helpUsage ?? "dummy"; 
     this.helpExample = data.helpExample ?? "dummy";

    }
    async execute(){
      
    }


  } 
module.exports.Command = Command

