import ejs from 'ejs'
import { endpoint, pathTemplate, transporter } from './email.config'
import type { RenderData } from './email.interface'

const sendEmail = async ({ user, template, token = '' }: RenderData): Promise<void> => {
  const redirectURL = `${endpoint[template]}${token}`
  const renderData = { template, user, redirectURL }

  const htmlContent = await ejs.renderFile(pathTemplate, renderData)

  await transporter.sendMail({
    from: '"Daily Tasks" <dailytasks.app@outlook.com>',
    to: `${user.email}`,
    subject: 'Hello ✔',
    text: 'Hello world?',
    html: htmlContent
  })
}

export default sendEmail
