class Command { 
    constructor(name, description, usage, example, permissions, aliases, module) { 
      this.name = name; 
      this.description = description; 
      this.usage = usage; 
      this.example = example; 
      this.permissions = permissions 
      this.id = name;
      this.aliases = aliases;
      this.module = module; 
    }
    async execute(){
      
    }


  } 
module.exports.Command = Command