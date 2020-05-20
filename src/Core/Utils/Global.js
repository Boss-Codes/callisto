const global = {}
global.version = 'v1.0.0'
global.modules = '2'
global.success = '<:callistoSuccess:699782547235799080>'
global.error = '<:callistoError:699782782519607317>'
global.online = '<:callistoOnline:699782570950524938>'
global.idle = '<:callistoIdle:699782668165840947>'
global.dnd = '<:callistoDnd:699782811686797432>'
global.offline = '<:callistoOffline:699782609147789322>'
global.defaultColor = 65310
global.userError = '<:callistoError:699782782519607317>Invalid user!'
global.roleError = '<:callistoError:699782782519607317>Invalid role!'
global.noUser = '<:callistoError:699782782519607317>Provide a user!'
global.noRole = '<:callistoError:699782782519607317>Provide a role!'

module.exports = { 
    version: global.version, 
    modules: global.modules,
    success: global.success, 
    error: global.error, 
    online: global.online, 
    idle: global.idle,
    dnd: global.dnd,
    offline: global, 
    defaultColor: global.defaultColor,
    userError: global.userError,
    roleError: global.roleError, 
    noUser: global.noUser, 
    noRole: global.noRole
}