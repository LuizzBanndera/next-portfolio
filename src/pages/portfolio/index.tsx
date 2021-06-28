import Styles from './portfolio.module.scss'
import Card from '../components/card'
import Header from '../components/header'
import Tags from '../components/tags'

export default function Contact() {
  return (
    <div className={Styles.Container}>
      <Header />
      <div className={Styles.Content}>
        <h1>Recent Projects</h1>
        <div className={Styles.Cards}>
          <Card
            Style={{ 'align-self': 'flex-start' }}
            Title="Portfolio"
            Description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
            Tags={
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
            Style={{
              'align-self': 'flex-end',
              'flex-direction': 'row-reverse',
            }}
            Title="Puby"
            Description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
            Tags={
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
