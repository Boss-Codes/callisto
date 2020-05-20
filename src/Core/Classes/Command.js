class Command { 
    constructor(data) { 
     this.name = data.name ?? "idiot"; 
     this.id = this.name; 
     this.module = data.module ?? "default"; 
     this.aliases = data.aliases ?? []; 
     this.userperms = data.userperms; 
     this.botperms = data.botperms; 
     this.helpDetail = data.helpDetail ?? "Some idiot forgot to add a helpDetail!"; 
     this.helpUsage = data.helpUsage ?? null; 
     this.helpExample = data.helpExample ?? null;

    }
    async execute(){
      
    }


  } 
module.exports.Command = Command

