import Styles from './modal.module.scss'
import Modal from '@material-ui/core/Modal'
import Fade from '@material-ui/core/Fade'
import Backdrop from '@material-ui/core/Backdrop'
import { useAppContext } from '@ctx/state'

type TProps = {
  children: JSX.Element
}

export default function Component(props: TProps) {
  const ctx = useAppContext()

  return (
    <>
      <Modal
        open={ctx.modal.isOpen}
        closeAfterTransition
        onClose={() => ctx.modal.handleOpen(false)}
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
        className={Styles.content}
      >
        <Fade in={ctx.modal.isOpen}>
          <div className={Styles.paper}>{props.children}</div>
        </Fade>
      </Modal>
    </>
  )
}
