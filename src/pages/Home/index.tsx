import Image from 'next/image'
import Styles from './Home.module.scss'
import ProfilePic from 'public/images/profile.jpg'
import podcast from 'public/images/Podcast.svg'
import GitHub from 'public/images/social/github.png'
import Twitter from 'public/images/social/twitter.png'
import Instagram from 'public/images/social/instagram.png'
import Linkedin from 'public/images/social/linkedin.png'

export default function Home() {
  const bio = `Hello! My name is Luiz Filipe. I'm a Brazilian developer actually
  working as a Delphi developer and learning JS/TS, React, Node. in my free
  time i usually work on personal projects for study or freelancer jobs.
  I've been working as a developer for about 4 years since I graduated
  from college.`

  const socialSize = 18

  return (
    <>
      <div className={Styles.Home}>
        <div className={Styles.Bio}>
          <div className={Styles.ProfilePic}>
            <Image src={ProfilePic} alt="Profile Picture" />
          </div>
          <div className={Styles.About}>
            <h1>Hi there!</h1>
            <span>{bio}</span>
          </div>
        </div>
        <div className={Styles.Social}>
          <ul>
            <li>
              <Image
                src={GitHub}
                alt="GitHub"
                width={socialSize}
                height={socialSize}
              />
              /luizzbanndera
            </li>
            <li>
              <Image
                src={Twitter}
                alt="Twitter"
                width={socialSize}
                height={socialSize}
              />
              @luiz_bandeira1
            </li>
            <li>
              <Image
                src={Instagram}
                alt="Instagram"
                width={socialSize}
                height={socialSize}
              />
              /luizfilipe.bandeira
            </li>
            <li>
              <Image
                src={Linkedin}
                alt="Linkedin"
                width={socialSize}
                height={socialSize}
              />
              /luizfbandeira
            </li>
          </ul>
        </div>
      </div>
      <div className={Styles.BackGround}>
        <Image src={podcast} alt="Ilustration" />
      </div>
    </>
  )
}
