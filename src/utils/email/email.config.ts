import path from 'path'
import nodemailer from 'nodemailer'

//* Config Transport
const transports = {
  production: {
    host: 'smtp-mail.outlook.com',
    secure: false, // true for 465, false for other ports
    port: 587, // port for secure SMTP
    tls: {
      ciphers: 'SSLv3'
    },
    auth: {
      user: process.env['APP_EMAIL_URL'],
      pass: process.env['APP_EMAIL_PASSWORD'] // generated ethereal password
    }
  },
  development: {
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: 'afd1ec1d5f048d',
      pass: '5b1ebedf4f4231'
    }
  },
  test: {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'brice.bartell74@ethereal.email',
      pass: 'AgNgTQhVAUrn1NFACz'
    }
  }
}
const transport = process.env['NODE_ENV'] === 'production' ? transports.production : process.env['NODE_ENV'] === 'development' ? transports.development : transports.test
const transporter = nodemailer.createTransport(transport)

//* Config Template
const pathTemplate = path.join(__dirname, './templates/_base.ejs')

//* Config redirect
const endpoint = {
  welcome: 'http://localhost:3000/api/v1/auth/verify?token=',
  forgotPassword: 'http://localhost:3000/api/v1/auth/reset-password?token='
}

export {
  transport,
  pathTemplate,
  transporter,
  endpoint
}
