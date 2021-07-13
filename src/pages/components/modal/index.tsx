/* eslint-disable react-hooks/exhaustive-deps */
import Styles from './modal.module.scss'
import Modal from '@material-ui/core/Modal'
import Fade from '@material-ui/core/Fade'
import Backdrop from '@material-ui/core/Backdrop'
import { useAppContext } from '@ctx/state'
import { useEffect } from 'react'

type TProps = {
  isOpen: boolean
  children: JSX.Element
}

export default function Component(props: TProps) {
  const ctx = useAppContext()

  useEffect(() => {
    ctx.modal.handleOpen(props.isOpen)
  }, [props.isOpen])

  return (
    <>
      <Modal
        open={props.isOpen}
        closeAfterTransition
        onClose={() => ctx.modal.handleOpen(false)}
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
        className={Styles.content}
      >
        <Fade in={props.isOpen}>
          <div className={Styles.paper}>{props.children}</div>
        </Fade>
      </Modal>
    </>
  )
}
