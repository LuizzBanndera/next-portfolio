import Styles from './card.module.scss'
import { Card, CardContent, CardMedia } from '@material-ui/core'
import Pic from 'public/images/profile.jpg'
import Image from 'next/image'
import Tags from '../tags'

export default function Cards() {
  const cardtext = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`

  return (
    <Card raised className={Styles.Card}>
      <CardContent className={Styles.CardContent}>
        <div className={Styles.Left}>
          <div className={Styles.CardInfo}>
            <h1 className={Styles.title}>Portfolio</h1>
            <div className={Styles.Tags}>
              <Tags
                description="node"
                background="#2dbd15"
                fontColor="whitesmoke"
              />
              <Tags
                description="typescript"
                background="#0089ff"
                fontColor="whitesmoke"
              />
            </div>
            <h4 className={Styles.description}>{cardtext}</h4>
          </div>
          <a>Check on Git</a>
        </div>
        <Image className={Styles.picture} src={Pic} alt="image" />
      </CardContent>
    </Card>
  )
}
