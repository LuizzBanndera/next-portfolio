import Styles from './tags.module.scss'

type TTags = {
  description: string
  background: string
  fontColor: string
}

export default function Tags(props: TTags) {
  const description = props.description
  const background = props.background
  const fontColor = props.fontColor

  return (
    <div style={{ background: background }} className={Styles.Content}>
      <div style={{ color: fontColor }} className={Styles.Tags}>
        {description}
      </div>
    </div>
  )
}
