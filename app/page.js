

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './Styles.css'
import ParticleBackground from './components/ParticleBackground'
import Link from 'next/link'
import Image from 'next/image'
import retrait from './retrato.JPG'

export default function Home() {
  return (
    <div className='App'>
      <div className="text" style={{position: 'relative', overflow: 'hidden'}}>
          <Image className='portrait' src={retrait} width={150} height={150}/>
          <h1 className='mainTitle'><b className='mainTitle'>Federico Garcia</b></h1>
          <h2 className='subTitle'>{'<Full-stack developer/>'}</h2>
          <div className='iconsContainer'>
            <a href='https://www.linkedin.com/in/federico-garcia-9614a6236/' className="bi bi-linkedin fs-8"></a>
            <a href='https://www.linkedin.com/in/federico-garcia-9614a6236/' className="bi bi-github fs-8"></a>
          </div>
          {/* <BsGithub size={100}/>
          <BsLinkedin size={100}/> */}
          <Link className="btn btn-outline-dark more" href={'/About'}><b>Show more</b></Link>
      </div>
      <div style={{position: 'absolute'}}>
        <ParticleBackground />
      </div>
      
    </div>
    
  )
}
