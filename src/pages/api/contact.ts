import NodeMailer from 'nodemailer'
import type { NextApiRequest, NextApiResponse } from 'next'
require('dotenv').config()

export default async function Mail(req: NextApiRequest, res: NextApiResponse) {
  const password = process.env.PASSWORD

  const transporter = NodeMailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'luizzbannderasender@gmail.com',
      pass: password,
    },
    secure: true,
  })

  const mailData = {
    from: 'Portfolio',
    to: 'luizzbanndera@gmail.com',
    subject: `Message from ${req.body.username}`,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `<div>${req.body.message}</div>
    <p>Sent from: ${req.body.email}</p>`,
  }

  try {
    await transporter.sendMail(mailData)

    return res.json({ message: 'Email enviado!' })
  } catch (error) {
    throw error
  }
}
