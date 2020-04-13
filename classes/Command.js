class Command { 
    constructor(name, description, usage, example, permissions, aliases) { 
      this.name = name; 
      this.description = description; 
      this.usage = usage; 
      this.example = example; 
      this.permissions = permissions 
      this.id = name;
      this.aliases = aliases;
    }
    async execute(){
      
    }


  } 
module.exports.Command = Command