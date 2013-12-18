//var log = require('./logger').getLogger('LOG1', 'INFO')
var log = require('./logger').getLogger('LOG1')
, log
, i = 0;

function doTheLogging(x) {
    log.info("info something %d", x);
    log.debug("debug something %d", x);
}

for ( ; i < 5000; i++) {
    doTheLogging(i);
}
