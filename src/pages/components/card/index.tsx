import Styles from './card.module.scss'
import { Card, CardContent, CardMedia } from '@material-ui/core'
import Pic from 'public/images/profile.jpg'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Cards(props: any) {
  const cardtext = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`

  return (
    <Card style={props.Style} raised className={Styles.Card}>
      <CardContent className={Styles.CardContent}>
        <div className={Styles.Left}>
          <div className={Styles.CardInfo}>
            <h1 className={Styles.title}>{props.Title}</h1>
            <div className={Styles.Tags}>{props.Tags}</div>
            <h4 className={Styles.description}>{props.Description}</h4>
          </div>
          <motion.div transition={{ ease: 'easeIn', duration: 2 }}>
            <a>Check on Git</a>
          </motion.div>
        </div>
        <Image className={Styles.picture} src={Pic} alt="image" />
      </CardContent>
    </Card>
  )
}
