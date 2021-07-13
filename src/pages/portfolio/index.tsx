import { useEffect, useState } from 'react'
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

  const [portfolio, setPortfolio] = useState(false)
  const [puby, setPuby] = useState(false)

  useEffect(() => {
    if (ctx.modal.isOpen === false) {
      setPortfolio(false)
      setPuby(false)
    }
  }, [ctx.modal.isOpen])

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
                onClick={() => setPortfolio(true)}
                description={`Este próprio projeto feito por mim utilizando next-js, scss, typescript...`}
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
              <Modal isOpen={portfolio}>
                <>
                  <h1 id={Styles.title}>Sobre o Portfólio</h1>
                  <div>
                    {`Desenvolvi esse projeto no meu tempo livre, para estudar e
                     também ter minha própria página com algumas coisas que posso fazer. 
                     Você pode verificar o repositório no github `}
                    <a href="https://github.com/LuizzBanndera/next-portfolio">
                      aqui.
                    </a>
                  </div>
                  <h1>Técnologias</h1>
                  <ul>
                    <li>
                      <strong>Typescritpt: </strong>
                      {`O projeto possui as práticas de tipagem mais utilizadas.`}
                    </li>
                    <br />
                    <li>
                      <strong>Next-js: </strong>
                      {`Next-js é um dos frameworks mais populares para
                       projetos SEO, usar next para um projeto de portfólio é essencial
                       uma vez que esse tipo de página precisa ser facilmente indexada por
                       mecanismos de pesquisa.`}
                    </li>
                    <br />
                    <li>
                      <strong>Sass: </strong>
                      {`Uma alternativa mais completa ao css que permite mais facilidade 
                      na estilização das paginas.`}
                    </li>
                  </ul>
                </>
              </Modal>
              <Card
                title="Puby"
                image={Puby}
                onClick={() => setPuby(true)}
                description={`Web App Delivery que colaborei no front-end,
                utilizando técnologias como redux e aws cognito...`}
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
              <Modal isOpen={puby}>
                <>
                  <h1 id={Styles.title}>Sobre o Puby</h1>
                  <div>
                    {`Puby é um app de delivery que permite ao usuário fazer pedidos em uma página web por meio
                     de um link que o estabelecimento envia via whatsapp. O estabelecimento possui uma página web que mostra os 
                     pedidos recebidos em tempo real.`}
                  </div>
                  <h1>Técnologias</h1>
                  <ul>
                    <li>
                      <strong>Typescritpt: </strong>
                      {`O projeto possui as práticas de tipagem mais utilizadas.`}
                    </li>
                    <br />
                    <li>
                      <strong>Redux: </strong>
                      {`Trabalhei pela primeira vez com essa lib que para projetos medio/grande porte 
                      é quase obrigatoria.`}
                    </li>
                    <br />
                    <li>
                      <strong>Sass: </strong>
                      {`Uma alternativa mais completa ao css que permite mais facilidade 
                      na estilização das paginas.`}
                    </li>
                  </ul>
                </>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
