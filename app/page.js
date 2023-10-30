"use client"

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './Styles.css'
import ParticleBackground from './components/ParticleBackground'
import Link from 'next/link'
import Image from 'next/image'
import federico from './Federico.jpg'
import LanguageDropdown from './components/LanguagesDropdown'

import global_en from './translations/en/global.json';
import global_es from './translations/en/global.json';
import i18next from 'i18next'

import { useTranslation } from 'react-i18next'

i18next.init({
  interpolation: { escapeValue:false }, 
  lng: "eng",
  resources: {
    en: { 
      global: global_en, 
    },
    es: { 
      global: global_es, 
    } 
    
  }
})

export default function Home() {

  const [t, i18n] = useTranslation("global");

  const HandleChangeLenguaje = (lang) => { 
    i18n.changeLanguage(lang)
  }

  return (
    <body> 
      <div className='App'>
        
        <div className="text" style={{position: 'relative', overflow: 'hidden'}}>
            <Image className='portrait' src={federico} width={150} height={150} alt='Retrato Federico Garcia, portafolio Federico Garcia Full Stack developer'/>
            <h1 className='mainTitle'><b className='mainTitle'>Federico Garcia</b></h1>
            <h2 className='subTitle'>{'<Full-stack developer/>'}</h2>
            <div className='iconsContactContainer'>
              <div>
                <a href='https://www.linkedin.com/in/federico-garcia-9614a6236/' className="bi bi-linkedin fs-8 iconoContacto"></a>
              </div>
              <div>
                <a href='https://github.com/federicojoaquin?tab=repositories' className="bi bi-github fs-8 iconoContacto"></a>
              </div>
              
            </div>
            <div>
              <button onClick={() => HandleChangeLenguaje("en")}>EN</button>
              <button onClick={() => HandleChangeLenguaje("en")}>EN</button>
            </div>
            {/* <BsGithub size={100}/>
            <BsLinkedin size={100}/> */}
            <Link className="btn btn-outline-dark showMore" href={'/About'}>{t("firstButton")}</Link>
        </div>
        <div style={{position: 'absolute'}}>
          <ParticleBackground />
        </div>
        
      </div>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"></script>  
    </body>          
  )
}
