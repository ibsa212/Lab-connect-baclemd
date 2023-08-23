import pino from 'pino'

const logger = pino({
  name: process.env.APP_ID,
  level: process.env.LOG_LEVEL || 'info'
})

export default logger
