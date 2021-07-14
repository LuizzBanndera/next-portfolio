import Styles from '../styles/Root.module.scss'
import Header from './components/headerr'
import Home from './homer'

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
