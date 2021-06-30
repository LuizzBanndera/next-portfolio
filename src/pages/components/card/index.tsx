import Styles from './card.module.scss'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core'
import Image from 'next/image'
import { motion } from 'framer-motion'

type TCard = {
  title: string
  tags: JSX.Element
  image: StaticImageData
  description: string
}

export default function Cards(props: TCard) {
  const cardtext = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`

  return (
    <Card raised className={Styles.Container}>
      <CardMedia className={Styles.Picture}>
        <Image
          src={props.image}
          alt="image"
          width={517}
          height={230}
          objectFit="cover"
        />
      </CardMedia>
      <CardActionArea className={Styles.Body}>
        {/* <CardContent className={Styles.Body}> */}
        <h1 className={Styles.title}>{props.title}</h1>
        <div className={Styles.Tags}>{props.tags}</div>
        <h4 className={Styles.description}>{props.description}</h4>
        {/* </CardContent> */}
      </CardActionArea>
    </Card>
  )
}
