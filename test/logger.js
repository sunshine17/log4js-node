var log4js = require('log4js')

log4js.configure('filter.json');

exports.getLogger = function(name, level){
    name = name || 'test';
    level = level || 'DEBUG';
    var logger = log4js.getLogger(name);
//    logger.setLevel(level);
    return logger;
};
