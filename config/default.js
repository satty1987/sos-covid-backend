const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  environment: process.env.NODE_ENV,
  app: {
    host: process.env.APP_HOST,
    port: process.env.HTTP_PORT || process.env.PORT,
    jwtSecret: process.env.JWT_SECRET,
    frontHostPasswordRecovery: process.env.FRONT_HOST_PWD_RECOVERY,
  },
  db: {
    mongodb: {
      url: process.env.DB_MONGODB_URL,
      dbUser: process.env.DB_USER,
      dbPassword: process.env.DB_PASSWORD,
    },
  },
  api: {
    url: process.env.API_URL,
  },
  mail: {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    },
    default: {
      from: 'Equipe SOS Covid <noreply@soscovid.com>'
    }
  },
};
