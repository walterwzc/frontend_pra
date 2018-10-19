

/**
 * @param {*} source
 * @param {*} dest
 * @returns
 */
function mix(source, dest) {
    if (dest === null) {
        return;
    }
    for (let key in dest) {
        let value = dest[key];
        if (typeof value === 'object' && !Array.isArray(value) && typeof source[key] === 'object') {
            mix(source[key], value);
        } else {
            source[key] = value;
        }
    }
}

const config = {
    "log4js": {
        "appenders": [
            {
                "type": "clustered",
                "appenders": [
                    {
                        "type": "dateFile",
                        "filename": "/home/shared/log/access-tutor-web-www.log",
                        "category": "access",
                        "pattern": "-yyyy-MM-dd",
                        "alwaysIncludePattern": true
                    },
                    {
                        "type": "/home/tutor/tutor-web-www/src/lib/errorAppender.js",
                        "appender": {
                            "type": "dateFile",
                            "filename": "/home/shared/log/error-tutor-web-www.log",
                            "pattern": "-yyyy-MM-dd",
                            "alwaysIncludePattern": true
                        }
                    }
                ]
            }
        ]
    }
}

const devConfig = {
    "log4js": {
        "appenders": [
            {
                "type": "console"
            }
        ]
    }
}


mix(config, devConfig)

console.log(config.log4js)