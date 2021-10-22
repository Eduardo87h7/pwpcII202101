//importando a winston
import winston,{ format } from 'winston';
import appRoot from 'app-root-path';
//componentes para crear el formato personalisado 
const { combine, timestamp, printf, uncolorize, json, colorize } = format;
//

//perfil de color log
const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'green',
};

//agregando el perfil a winston
winston.addColors(colors);
//formato de consola
const myFormat = combine(
   colorize({all: true}),
   timestamp(),
   printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
);

// formato para la salida de log
const myFileFormat = combine(
    uncolorize(),
    timestamp(),
    json()
);
// crear los objetos de configuracion 
const options = {
    infoFile: {
        level: 'info',
        filename: `${appRoot}/server/logs/infos.log`,
        handleExceptions: true,
        maxsize: 5242880, // 5mb
        maxFiles: 5,
        format: myFileFormat,
    },
    warnFile: {
        level: 'warn',
        filename: `${appRoot}/server/logs/warns.log`,
        handleExceptions: true,
        maxsize: 5242880, // 5mb
        maxFiles: 5,
        format: myFileFormat,
    },
    errorFile: {
        level: 'error',
        filename: `${appRoot}/server/logs/errors.log`,
        handleExceptions: true,
        maxsize: 5242880, // 5mb
        maxFiles: 5,
        format: myFileFormat,
    },
    console:{
        level: 'debug',
        handleExceptions: true,
        format: myFileFormat,
    },
};

// creando la instancia del mregistrador

const logger = winston.createLogger({
    transports:[
        new winston.transport.File(options.infoFile),
        new winston.transport.File(options.warnFile),
        new winston.transport.File(options.errorFile),
        new winston.transport.File(options.console),
    ],
    exitOnError: false, // no finaliza en excepciones manejadas
});

// 
logger.stream = {
    write(message){
        logger.info(message);
    },
};

export default logger;
