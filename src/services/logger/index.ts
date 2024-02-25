import { createLogger, transports, format } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import { CONFIG } from 'config';


const logger = createLogger({
  level: CONFIG.LOGGER_LEVEL || 'info',
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    new transports.Console(), // Log to console
    new DailyRotateFile({
      filename: 'logs/error-%DATE%.log',
      level: CONFIG.LOGGER_LEVEL || 'info',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    })
  ]
})


const loggingDetails = (entity = '', details: any = {}) => ({
  entity,
  details
})


export { logger, loggingDetails }