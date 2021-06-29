import Styles from './card.module.scss'
import { Card, CardContent } from '@material-ui/core'
import Pic from 'public/images/profile.jpg'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Cards(props: any) {
  const cardtext = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`

  return (
    <Card style={props.Style} raised className={Styles.Container}>
      <Image
        className={Styles.picture}
        src={Pic}
        alt="image"
        width={517}
        height={217}
        objectFit="cover"
      />
      <CardContent className={Styles.Content}>
        <div className={Styles.Body}>
          <div className={Styles.Info}>
            <h1 className={Styles.title}>{props.Title}</h1>
            <div className={Styles.Tags}>{props.Tags}</div>
            <h4 className={Styles.description}>{props.Description}</h4>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
