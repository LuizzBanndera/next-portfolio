import Styles from './card.module.scss'
import { Card, CardActionArea, CardMedia, duration } from '@material-ui/core'
import Image from 'next/image'
import { motion } from 'framer-motion'

type TCard = {
  title: string
  tags: JSX.Element
  image: StaticImageData
  description: string
  onClick?: any
}

export default function Cards(props: TCard) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.999 }}>
      <Card raised className={Styles.Container} onClick={props.onClick}>
        <CardMedia className={Styles.Picture}>
          <Image
            src={props.image}
            alt="image"
            width={517}
            height={172}
            objectFit="cover"
            quality={100}
            priority
          />
        </CardMedia>
        <CardActionArea className={Styles.Body}>
          <h1 className={Styles.title}>{props.title}</h1>
          <div className={Styles.Tags}>{props.tags}</div>
          <h4 className={Styles.description}>{props.description}</h4>
        </CardActionArea>
      </Card>
    </motion.div>
  )
}
