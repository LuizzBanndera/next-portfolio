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
      <form className={Styles.Content}>
        <h1 style={{ marginTop: 0 }}>Want to get in touch?</h1>
        <div className="animate__animated animate__fadeInUp animate__delay-0.5s">
          <div className={Styles.Form}>
            <TextField
              variant="outlined"
              fullWidth={false}
              label="Name"
              size="small"
              type="text"
              className={Styles.Username}
              onChange={(e: any) => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              fullWidth={false}
              label="Email"
              size="small"
              type="email"
              className={Styles.Email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              label="Your message"
              type="text"
              rows={6}
              multiline
              className={Styles.Memo}
              onChange={(e: any) => setMessage(e.target.value)}
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            onClick={(e: any) => onSubmit(e)}
          >
            Send
          </Button>
          <span
            style={{ visibility: emailSent ? 'visible' : 'hidden' }}
            className={Styles.Alert}
          >
            {alert}
          </span>
        </div>
      </form>
      <div className={Styles.BackGround}>
        <div className="animate__animated animate__slideInUp">
          <Image src={CoffeCall} alt="Illustration" />
        </div>
      </div>
    </>
  )
}
