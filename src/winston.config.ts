import { utilities } from 'nest-winston';
import { createLogger, format, transports } from 'winston';

import { ServiceName } from './swagger.config';

const DEV_LOGGER_CONFIG = {
  level: 'info'.toLocaleLowerCase(),
  transports: [
    new transports.Console({
      format: format.combine(
        format.timestamp(),
        format.ms(),
        utilities.format.nestLike(ServiceName, {
          colors: true,
          prettyPrint: true,
        }),
      ),
    }),
  ],
};

const PROD_LOGGER_CONFIG = {
  level: 'info'.toLocaleLowerCase(),
  exitOnError: false,
  format: format.combine(
    format.errors({ stack: true }),
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.json(),
  ),
  defaultMeta: { service: ServiceName },
  transports: [new transports.Console()],
};

export const WINSTON_LOGGER_INSTANCE = createLogger(
  process.env.NODE_ENV === 'production'
    ? PROD_LOGGER_CONFIG
    : DEV_LOGGER_CONFIG,
);