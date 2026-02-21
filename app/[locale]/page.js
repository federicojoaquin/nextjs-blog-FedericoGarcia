"use client"

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './Styles.css'
import ParticleBackground from './components/ParticleBackground'
import Image from 'next/image'
import Script from 'next/script'
import federico from './Federico.jpg'
import LanguageDropdown from './components/LanguagesDropdown';
import { Link } from '../../navigation';
import { useTranslations } from 'next-intl'

export default function Home() {

  const t = useTranslations('main');

  return (
    <main>
      <div className='App'>

        <div className="text" style={{ position: 'relative', overflow: 'hidden' }}>
          <Image className='portrait-ring' src={federico} width={150} height={150} alt='Retrato Federico Garcia, portafolio Federico Garcia Full Stack developer' />
          <h1 className='mainTitle'><b className='mainTitle'>Federico Garcia</b></h1>
          <h2 className='subTitle'>{'Python backend developer'}</h2>
          <div className='iconsContactContainer'>
            <a href='https://www.linkedin.com/in/federico-garcia-9614a6236/' className="bi bi-linkedin iconoContacto" aria-label="LinkedIn"></a>
            <a href='https://github.com/federicojoaquin?tab=repositories' className="bi bi-github iconoContacto" aria-label="GitHub"></a>
          </div>
          <h4 style={{ marginTop: '10px', fontSize: '0.85rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
            Language / idioma:
          </h4>
          <LanguageDropdown reflink='/' />
          <Link className="ctaBtn showMore" href={'/About'}>
            {t('firstButton')}
          </Link>
        </div>
        <div style={{ position: 'absolute' }}>
          <ParticleBackground />
        </div>

      </div>
      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" strategy="afterInteractive" />
    </main>
  )
}
