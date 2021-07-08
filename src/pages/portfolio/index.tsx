import Styles from './portfolio.module.scss'
import Card from '../components/card'
import Header from '../components/header'
import Tags from '../components/tags'
import Portfolio from 'public/images/portfolio.png'
import Puby from 'public/images/puby.png'
import { motion } from 'framer-motion'

export default function Contact() {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <>
      <div className={Styles.Container}>
        <Header />
        <div className={Styles.Content}>
          <h1>Recent Projects</h1>
          <div className="animate__animated animate__slideInUp">
            <div className={Styles.Body}>
              <Card
                title="Portfolio"
                image={Portfolio}
                description={`This own project made by me using next-js and scss, that's my first next-js app...`}
                tags={
                  <>
                    <Tags
                      description="typescript"
                      background="#1066bf"
                      fontColor="whitesmoke"
                    />
                    <Tags
                      description="next-js"
                      background="#000000"
                      fontColor="whitesmoke"
                    />
                    <Tags
                      description="scss"
                      background="hsl(330deg 51% 61%)"
                      fontColor="whitesmoke"
                    />
                  </>
                }
              />
              <Card
                title="Puby"
                image={Puby}
                description={`This one is a Delivery project that i colaborated with mainly in the front-end,
             Worked with redux and aws cognito...`}
                tags={
                  <>
                    <Tags
                      description="typescript"
                      background="#1066bf"
                      fontColor="whitesmoke"
                    />
                    <Tags
                      description="redux"
                      background="#764abc"
                      fontColor="whitesmoke"
                    />
                    <Tags
                      description="cognito"
                      background="#ec912d"
                      fontColor="whitesmoke"
                    />
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
