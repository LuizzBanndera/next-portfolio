import { useEffect } from 'react'
import Styles from './portfolio.module.scss'
import Card from '../components/card'
import Header from '../components/header'
import Tags from '../components/tags'
import Portfolio from 'public/images/portfolio.png'
import Puby from 'public/images/puby.png'
import Modal from '../components/modal'
import { useAppContext } from '@ctx/state'

export default function Contact() {
  const ctx = useAppContext()

  const handleModal = () => {
    ctx.modal.handleOpen(true)
    console.log(ctx.modal.isOpen)
  }

  return (
    <>
      <div className={Styles.Container}>
        <Header />
        <div className={Styles.Content}>
          <h1>Recent Projects</h1>
          <div className="animate__animated animate__slideInUp">
            <div className={Styles.Body}>
              <Card
                title="Portfolio"
                image={Portfolio}
                onClick={() => handleModal()}
                description={`This own project made by me using next-js and scss, that's my first next-js app...`}
                tags={
                  <>
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
                    <Tags
                      description="scss"
                      background="hsl(330deg 51% 61%)"
                      fontColor="whitesmoke"
                    />
                  </>
                }
              />
              <Modal>
                <>
                  <h2>Portfolio Details</h2>
                  <div>
                    Made this project on my free time, basically for study and
                    also to have my own page with all my skills in it. you can
                    check this github project repo{' '}
                    <a href="https://github.com/LuizzBanndera/next-portfolio">
                      here.
                    </a>
                  </div>
                  <h2>Things that i used</h2>
                  <ul>
                    <li>
                      <strong>typescritp: </strong>
                      all project is made with the most common type rules.
                    </li>
                    <br />
                    <li>
                      <strong>next-js: </strong>
                      next is becoming one of the most popular frameorks for SEO
                      projects, using next for a portfolio project is essential
                      since those type of pages need to be easily found by
                      search pages.
                    </li>
                    <br />
                    <li>
                      <strong>scss: </strong>
                      that was my first project using scss and i dont feel like
                      comming back to the old css style again, its a way more
                      easy to work with this one.
                    </li>
                  </ul>
                </>
              </Modal>
              <Card
                title="Puby"
                image={Puby}
                description={`This one is a Delivery project that i colaborated with mainly in the front-end,
                Worked with redux and aws cognito...`}
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
                    <Tags
                      description="cognito"
                      background="#ec912d"
                      fontColor="whitesmoke"
                    />
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
function usestae(): [any, any] {
  throw new Error('Function not implemented.')
}
