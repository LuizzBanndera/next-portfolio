import Image from 'next/image'
import Styles from './home.module.scss'
import ProfilePic from 'public/images/profile.png'
import podcast from 'public/images/illustrations/Podcast.svg'
import GitHub from 'public/images/social/github.svg'
import Twitter from 'public/images/social/twitter.svg'
import Instagram from 'public/images/social/instagram.svg'
import Linkedin from 'public/images/social/linkedin.svg'

export default function Home() {
  const bio = `Hello! My name is Luiz Filipe B Alves. I'm a Brazilian developer actually
  working with Delphi and learning JS/TS, React, Node. in my free
  time i usually work on personal projects for study or freelancer jobs.
  I've been working as a developer for about 4 years since I graduated
  from college. Checkout my Portfolio.`

  const socialSize = 30

  return (
    <>
      <div className={Styles.Home}>
        <div className={Styles.Profile}>
          <div
            className={`${
              Styles.Picture
            } ${'animate__animated animate__fadeIn animate__delay-1s'}`}
          >
            <Image src={ProfilePic} alt="Profile Picture" />
          </div>
          <div className={Styles.About}>
            <h1>Hi there!</h1>
            <div className="animate__animated animate__slideInUp">
              <span>{bio}</span>
            </div>
          </div>
        </div>
        <div className="animate__animated animate__slideInUp">
          <div className={Styles.Social}>
            <ul>
              <li>
                <Image
                  src={GitHub}
                  alt="GitHub"
                  width={socialSize}
                  height={socialSize}
                />
                <a href="https://github.com/luizzbanndera">/luizzbanndera</a>
              </li>
              <li>
                <Image
                  src={Twitter}
                  alt="Twitter"
                  width={socialSize}
                  height={socialSize}
                />
                <a href="https://twitter.com/luiz_bandeira1">@luiz_bandeira1</a>
              </li>
              <li>
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
              <li>
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
      <div className={Styles.Illustration}>
        <Image quality={100} src={podcast} alt="Background" />
      </div>
    </>
  )
}
