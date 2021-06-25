import Styles from './portfolio.module.scss'
import Card from '../components/card'
import Header from '../components/header'

export default function Contact() {
  return (
    <div className={Styles.Container}>
      <Header />
      <div className={Styles.Content}>
        <h1>Recent Projects</h1>
        <div className={Styles.Cards}>
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}
