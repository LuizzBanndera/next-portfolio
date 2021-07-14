import Styles from '../styles/root.module.scss'
import Header from './components/header'
import Home from './home'

export default function Root() {
  return (
    <div className={Styles.Container}>
      <Header />
      <div className={Styles.Content}>
        <Home />
      </div>
    </div>
  )
}
