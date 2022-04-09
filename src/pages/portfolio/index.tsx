import { useEffect, useState } from 'react'
import Styles from './portfolio.module.scss'
import { useAppContext } from '@ctx/state'

//componenets
import Card from '../components/card'
import Header from '../components/header'
import Tags from '../components/tags'
import Modal from '../components/modal'

//images
import Portfolio from '../../../public/images/portfolio.png'
import Puby from '../../../public/images/puby.png'
import TsFrontSvg from '../../../public/images/tsfront.png'
import ValorantWikii from '../../../public/images/valorantwikii.png'

export default function Contact() {
  const ctx = useAppContext()

  const [portfolio, setPortfolio] = useState(false)
  const [puby, setPuby] = useState(false)
  const [tsfront, setTsFront] = useState(false)
  const [valorantWiki, setValorantWiki] = useState(false)

  useEffect(() => {
    if (ctx.modal.isOpen === false) {
      setPortfolio(false)
      setPuby(false)
      setTsFront(false)
    }
  }, [ctx.modal.isOpen])

  return (
    <>
      <div className={Styles.Container}>
        <Header />
        <div className={Styles.Content}>
          <h1>Projetos recentes</h1>
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
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/LuizzBanndera/next-portfolio"
                    >
                      aqui.
                    </a>
                  </div>
                  <h1>Tecnologias</h1>
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
                description={`App de delivery que para fazer pedidos em uma página web...`}
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
                    {`App de delivery que permite ao usuário fazer pedidos em uma página web por meio
                     de um link que o estabelecimento envia via whatsapp. O estabelecimento possui uma página web que mostra os 
                     pedidos recebidos em tempo real.`}
                  </div>
                  <h1>Tecnologias</h1>
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
              <Card
                title="TS-Front"
                image={TsFrontSvg}
                onClick={() => setTsFront(true)}
                description={`Template para dashboard que ja pré-configurado...`}
                tags={
                  <>
                    <Tags
                      description="typescript"
                      background="#1066bf"
                      fontColor="whitesmoke"
                    />
                    <Tags
                      description="styled"
                      background="#764abc"
                      fontColor="whitesmoke"
                    />
                  </>
                }
              />
              <Modal isOpen={tsfront}>
                <>
                  <h1 id={Styles.title}>Sobre o TS-Front</h1>
                  <div>
                    {`A idéia era desenvolver um template simples para dashboard que ja vem pré-configurado para que você so precise 
                informar as rotas das paginas que criar e os icones que deseja para cada item do menu.
                Utilizei typescript e styled-components para todos os elementos. Você pode verificar o repositório `}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/LuizzBanndera/ts-front"
                    >
                      aqui.
                    </a>
                  </div>
                  <h1>Tecnologias</h1>
                  <ul>
                    <li>
                      <strong>Typescritpt: </strong>
                      {`O projeto possui as práticas de tipagem mais utilizadas.`}
                    </li>
                    <br />
                    <li>
                      <strong>Styled: </strong>
                      {`Utilizei styled-components em todo o projeto com um unico arquivo para componente e estilização.`}
                    </li>
                  </ul>
                </>
              </Modal>
              <Card
                title="Valorant-wikii"
                image={ValorantWikii}
                onClick={() => setValorantWiki(true)}
                description={`Wiki não oficial do jogo VALORANT.`}
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
              <Modal isOpen={valorantWiki}>
                <>
                  <h1 id={Styles.title}>Sobre o Valorant-wikii</h1>
                  <div>
                    {`valorant wiki foi feito em next e utiliza uma api-publica(não oficial) do
                    jogo VALORANT para exibir detalhes de agentes, mapas, etc... github do projeto `}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/luizfbalves/valorant-wikii"
                    >
                      aqui.
                    </a>
                    {` wiki `}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://valorant-wikii.vercel.app/"
                    >
                      aqui.
                    </a>
                  </div>
                  <h1>Tecnologias</h1>
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
                      <strong>styled-components: </strong>
                      {`styled-components utiliza template literals para estilizar componentes. 
                      Ele remove o mapeamento entre componentes e estilos.`}
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
