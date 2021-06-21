import Styles from './Header.module.scss'
import Button from '@material-ui/core/Button'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className={Styles.Container}>
      <motion.div
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <button className={Styles.Logo}>LB</button>
      </motion.div>
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
