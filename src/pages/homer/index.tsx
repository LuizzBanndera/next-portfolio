import Image from 'next/image'
import Styles from './home.module.scss'
import ProfilePic from '../../../public/images/profile.png'
import podcast from '../../../public/images/illustrations/Podcast.svg'
import GitHub from '../../../public/images/social/github.svg'
import Twitter from '../../../public/images/social/twitter.svg'
import Instagram from '../../../public/images/social/instagram.svg'
import Linkedin from '../../../public/images/social/linkedin.svg'

export default function Home() {
  const bio = `Hello! My name is Luiz Filipe B Alves. I'm a Brazilian developer actually
  working with Delphi and learning JS/TS, React, Node. in my free
  time i usually work on personal projects for study or freelancer jobs.
  I've been working as a developer for about 4 years since I graduated
  from college. Checkout my Portfolio.`

  const socialSize = 30

  return (
    <>
      <div className={Styles.home}>
        <div className={Styles.profile}>
          <div
            className={`${
              Styles.picture
            } ${'animate__animated animate__fadeIn'}`}
          >
            <Image src={ProfilePic} alt="Profile Picture" />
          </div>
          <div className={Styles.about}>
            <h1>Hi there!</h1>
            <div className="animate__animated animate__slideInUp">
              <span>{bio}</span>
            </div>
          </div>
        </div>
        <div className="animate__animated animate__slideInUp">
          <div className={Styles.social}>
            <ul>
              <li className="animate__animated animate__slideInLeft">
                <Image
                  src={GitHub}
                  alt="GitHub"
                  width={socialSize}
                  height={socialSize}
                />
                <a href="https://github.com/luizzbanndera">/luizzbanndera</a>
              </li>
              <li className="animate__animated animate__slideInLeft">
                <Image
                  src={Twitter}
                  alt="Twitter"
                  width={socialSize}
                  height={socialSize}
                />
                <a href="https://twitter.com/luiz_bandeira1">@luiz_bandeira1</a>
              </li>
              <li className="animate__animated animate__slideInLeft">
                <Image
                  src={Instagram}
                  alt="Instagram"
                  width={socialSize}
                  height={socialSize}
                />
                <a href="https://www.instagram.com/luizfilipe.bandeira">
                  /luizfilipe.bandeira
                </a>
              </li>
              <li className="animate__animated animate__slideInLeft">
                <Image
                  src={Linkedin}
                  alt="Linkedin"
                  width={socialSize}
                  height={socialSize}
                />
                <a href="https://www.linkedin.com/in/luizfbandeira/">
                  /luizfbandeira
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={Styles.illustration}>
        <Image quality={100} src={podcast} alt="Background" />
      </div>
    </>
  )
}
