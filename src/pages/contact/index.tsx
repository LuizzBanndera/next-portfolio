import Header from '../components/header'
import Styles from './Contact.module.scss'
import { TextField, Button } from '@material-ui/core'
import Image from 'next/image'
import CoffeCall from 'public/images/illustrations/CoffeCall.svg'

export default function Contact() {
  return (
    <div>
      <Header />
      <div className={Styles.Content}>
        <h1 style={{ marginTop: 0 }}>Want to get in touch?</h1>
        <div className={Styles.Form}>
          <TextField
            variant="outlined"
            fullWidth={false}
            label="Name"
            size="small"
            className={Styles.Username}
          />
          <TextField
            variant="outlined"
            fullWidth={false}
            label="Email"
            size="small"
            className={Styles.Email}
          />
          <TextField
            variant="outlined"
            label="Your message"
            rows={6}
            multiline
            className={Styles.Memo}
          />
        </div>
        <Button variant="contained" color="secondary">
          Send
        </Button>
      </div>
      <div className={Styles.BackGround}>
        <Image src={CoffeCall} alt="Illustration" />
      </div>
    </div>
  )
}
