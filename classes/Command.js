class Command { 
    constructor(name, description, usage, example, permissions, aliases, info) { 
      this.name = name; 
      this.description = description; 
      this.usage = usage; 
      this.example = example; 
      this.permissions = permissions 
      this.id = name;
      this.aliases = aliases;
      this.info = info;
    }
    async execute(){
      
    }


  } 
module.exports.Command = Command