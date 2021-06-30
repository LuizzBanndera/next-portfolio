import Styles from './portfolio.module.scss'
import Card from '../components/card'
import Header from '../components/header'
import Tags from '../components/tags'
import Portfolio from 'public/images/profile.png'
import Puby from 'public/images/example.jpg'

export default function Contact() {
  return (
    <div className={Styles.Container}>
      <Header />
      <div className={Styles.Content}>
        <h1>Recent Projects</h1>
        <div className={Styles.Body}>
          <Card
            title="Portfolio"
            image={Portfolio}
            description={`This own project made by me using Next-Js, scss.`}
            tags={
              <>
                <Tags
                  description="node"
                  background="#4aab3a"
                  fontColor="whitesmoke"
                />
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
              </>
            }
          />
          <Card
            title="Puby"
            image={Puby}
            description={`This one is a Delivery project that i colaborated with mainly in the front-end,
             Worked with redux and aws cognito authentication services...`}
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
              </>
            }
          />
        </div>
      </div>
    </div>
  )
}
