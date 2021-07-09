import { useState } from 'react'
import Header from '../components/header'
import Styles from './contact.module.scss'
import { TextField, Button } from '@material-ui/core'
import Image from 'next/image'
import CoffeCall from 'public/images/illustrations/CoffeCall.svg'
import axios from 'axios'

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
        setAlert('Please enter your details!')
        setEmailSent(true)
        return
      }
      setAlert('Sending email!')
      setEmailSent(true)
      const result = await axios.post('/api/contact', data)
      if (result) {
        setAlert('Email sent!')
        setEmailSent(true)
      } else {
        setAlert('Email sent failure!')
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
        <h1 style={{ marginTop: 0 }}>Want to get in touch?</h1>
        <div
          className={`${
            Styles.body
          } ${'animate__animated animate__fadeIn animate__delay-1s'}`}
        >
          <div className={Styles.form}>
            <TextField
              variant="outlined"
              label="Name"
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
              label="Your message"
              type="text"
              rows={6}
              multiline
              className={Styles.message}
              onChange={(e: any) => setMessage(e.target.value)}
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            className={Styles.button}
            onClick={(e: any) => onSubmit(e)}
          >
            Send
          </Button>
          <span
            className={Styles.alert}
            style={{ visibility: emailSent ? 'visible' : 'hidden' }}
          >
            {alert}
          </span>
        </div>
      </div>
      <div className={Styles.backGround}>
        <Image src={CoffeCall} alt="Illustration" />
      </div>
    </>
  )
}
