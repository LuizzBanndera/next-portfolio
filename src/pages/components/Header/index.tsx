import Styles from './Header.module.scss'
import Button from '@material-ui/core/Button'

export default function Header() {
  return (
    <header className={Styles.Container}>
      <button className={Styles.Logo}>LB</button>
      <ul className={Styles.Menu}>
        <Button size="small">Home</Button>
        <Button size="small">Contact</Button>
        <Button className={Styles.Button} variant="contained" size="small">
          Portfolio
        </Button>
      </ul>
    </header>
  )
}
