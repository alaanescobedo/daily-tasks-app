import path from 'path'
import nodemailer from 'nodemailer'

//* Config Transport
const transports = {
  production: {
    host: process.env['APP_EMAIL_HOST_PRODUCTION'],
    port: Number(process.env['APP_EMAIL_PORT_PRODUCTION']), // port for secure SMTP
    secure: false, // true for 465, false for other ports
    tls: {
      ciphers: 'SSLv3'
    },
    auth: {
      user: process.env['APP_EMAIL_USER_PRODUCTION'],
      pass: process.env['APP_EMAIL_PASSWORD_PRODUCTION'] // generated ethereal password
    }
  },
  development: {
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: process.env['APP_EMAIL_USER_DEVELOPMENT'],
      pass: process.env['APP_EMAIL_PASSWORD_DEVELOPMENT']
    }
  },
  test: {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: process.env['APP_EMAIL_USER_TEST'],
      pass: process.env['APP_EMAIL_PASSWORD_TEST']
    }
  }
}
const transport = process.env['NODE_ENV'] === 'production' ? transports.production : process.env['NODE_ENV'] === 'development' ? transports.development : transports.test
const transporter = nodemailer.createTransport(transport)

//* Config Template
const pathTemplate = path.join(__dirname, './templates/_base.ejs')

//* Config renderData
const renderDataConfig = {
  welcome: {
    endpoint: 'http://localhost:3000/api/v1/auth/verify?token=',
    btnLabel: 'Verify Email'
  },
  forgotPassword: {
    endpoint: 'http://localhost:3000/reset-password?token=',
    btnLabel: 'Reset Password'
  },
  passwordChanged: {
    endpoint: 'http://localhost:3000/reset-password?token=',
    btnLabel: 'Reset Password'
  }
}
export {
  transport,
  pathTemplate,
  transporter,
  renderDataConfig
}
