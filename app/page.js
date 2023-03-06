

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './Styles.css'
import ParticleBackground from './components/ParticleBackground'
import Link from 'next/link'
import Image from 'next/image'
import federico from './Federico.jpg'

export default function Home() {
  return (
    <div className='App'>
      <div className="text" style={{position: 'relative', overflow: 'hidden'}}>
          <Image className='portrait' src={federico} width={150} height={150}/>
          <h1 className='mainTitle'><b className='mainTitle'>Federico Garcia</b></h1>
          <h2 className='subTitle'>{'<Full-stack developer/>'}</h2>
          <div className='iconsContactContainer'>
            <div>
              <a href='https://www.linkedin.com/in/federico-garcia-9614a6236/' className="bi bi-linkedin fs-8 iconoContacto"></a>
            </div>
            <div>
              <a href='https://www.linkedin.com/in/federico-garcia-9614a6236/' className="bi bi-github fs-8 iconoContacto"></a>
            </div>
            
          </div>
          {/* <BsGithub size={100}/>
          <BsLinkedin size={100}/> */}
          <Link className="btn btn-outline-dark showMore" href={'/About'}><b>Show more</b></Link>
      </div>
      <div style={{position: 'absolute'}}>
        <ParticleBackground />
      </div>
      
    </div>
    
  )
}
