import ejs from 'ejs'
import { pathTemplate, renderDataConfig, transporter } from './email.config'
import type { RenderData } from './email.interface'

const sendEmail = async ({ user, template, token = '' }: RenderData): Promise<void> => {
  const redirectURL = `${renderDataConfig[template].endpoint}${token}`
  const btnLabel = renderDataConfig[template].btnLabel

  const renderData = { template, user, redirectURL, btnLabel }

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
