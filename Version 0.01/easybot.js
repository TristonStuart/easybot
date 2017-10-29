// Require Discordie
let discordie = require('discordie')


// Promise Handler
function prom(func, res, rej){
    return new Promise((resolve, reject) => {
        let val = func();
        if (val){
            resolve(res);
        }else {
            reject(rej)
        }
    })
}


// Less typing, define exports as module.exports
let exports = module.exports;

// Define system

exports.system = {
    commandList: []
};

// Handle commands. Example : let help = new easybot.command('help', false); help.on= function(msg){msg.reply('Help Page 1')}
exports.command = (name, attributes) => {
    // Needed to put return into a variable
    let RETURN = {name : name, attributes : attributes, on : function(msg){return false;}};
    return prom((resolve, reject) => {


        // Check if command already exists
        for (let i=0; i<exports.system.commandList.length; i++){
            if (exports.system.commandList[i] == name){
                return false
            }
        }
        exports.system.commandList[exports.system.commandList.length] = name;
        return true

    }, RETURN, 'Command Already in use')
}
