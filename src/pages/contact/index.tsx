import { useState } from 'react'
import Header from '../components/header'
import Styles from './contact.module.scss'
import Image from 'next/image'
import CoffeCall from '../../../public/images/illustrations/CoffeCall.svg'
import axios from 'axios'
import { TextField, Button } from '@material-ui/core'

export default function Contact() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [emailSent, setEmailSent] = useState(false)
  const [alert, setAlert] = useState('Sending email!')

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const data = { username, email, message }

    try {
      if (!username || !email || !message) {
        setAlert('Por favor, preencha todos os campos!')
        setEmailSent(true)
        return
      }
      setAlert('Enviando email!')
      setEmailSent(true)
      const result = await axios.post('/api/contact', data)
      if (result) {
        setAlert('Email enviado =)')
        setEmailSent(true)
      } else {
        setAlert('Falha no envio do email =(')
        setEmailSent(false)
      }
    } catch (error) {
      error
      setEmailSent(false)
    }
  }

  return (
    <>
      <Header />
      <div className={Styles.content}>
        <h1 style={{ marginTop: 0 }}>Deseja entrar em contato?</h1>
        <div
          className={`${Styles.body} ${'animate__animated animate__fadeInUp '}`}
        >
          <div className={Styles.form}>
            <TextField
              variant="outlined"
              label="Nome"
              size="small"
              type="text"
              className={Styles.username}
              onChange={(e: any) => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              label="Email"
              size="small"
              type="email"
              className={Styles.email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Sua mensagem..."
              type="text"
              rows={6}
              multiline
              className={Styles.message}
              onChange={(e: any) => setMessage(e.target.value)}
            />
          </div>
          <div>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              className={Styles.button}
              onClick={(e: any) => onSubmit(e)}
            >
              Enviar
            </Button>
            <span
              className={Styles.alert}
              style={{ visibility: emailSent ? 'visible' : 'hidden' }}
            >
              {alert}
            </span>
          </div>
        </div>
      </div>
      <div className={Styles.backGround}>
        <Image src={CoffeCall} alt="Illustration" />
      </div>
    </>
  )
}
