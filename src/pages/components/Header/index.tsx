import Link from 'next/link'
import Button from '@material-ui/core/Button'
import { motion } from 'framer-motion'
import Styles from './header.module.scss'

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
        <Link href="/" passHref>
          <button className={Styles.Logo}>LB</button>
        </Link>
      </motion.div>
      <ul className={Styles.Menu}>
        <Link href="/" passHref>
          <Button size="small">Home</Button>
        </Link>
        <Link href="/contact" passHref>
          <Button size="small">Contact</Button>
        </Link>
        <Link href="/portfolio" passHref>
          <Button className={Styles.Button} variant="contained" size="small">
            Portfolio
          </Button>
        </Link>
      </ul>
    </header>
  )
}
