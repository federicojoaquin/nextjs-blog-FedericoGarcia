"use client"

import { React, useState, useEffect } from 'react'
import Image from 'next/image'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Styles/Section1.css'
import profilePhoto from '../Federico.jpg'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

function Section1({ title, about, download }) {
  const [downloadLink, setDownloadLink] = useState('');

  useEffect(() => {
    const currentUrl = window.location.href;
    const segments = currentUrl.split('/');
    const languagePrefix = segments[3];

    if (languagePrefix === 'en') {
      setDownloadLink('/pdfs/FedericoGarciaENG.pdf');
    } else if (languagePrefix === 'es') {
      setDownloadLink('/pdfs/FedericoGarciaESP.pdf');
    }
  }, []);

  return (

    <div className='firstSec container-fluid' id='sobreMi'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-6 col-sm-12 textContainer'>
            <span className="section-badge">&lt; About /&gt;</span>
            <h1 className={`titleAboutMe`} dangerouslySetInnerHTML={{ __html: title }}></h1>
            <p className={`paragraph`} style={{ marginTop: '1rem', lineHeight: '1.75' }} dangerouslySetInnerHTML={{ __html: about }}></p>
            <a className="cvBtn" href={downloadLink} id="enlaceDescargarPdf" download="FedericoGarcia.pdf" dangerouslySetInnerHTML={{ __html: download }}></a>
          </div>
          <div className='col-md-6 col-sm-12 photoContainer'>
            <Image
              className='profilePhoto'
              src={profilePhoto}
              width={420}
              height={420}
              style={{ width: '100%', height: 'auto', maxWidth: '420px' }}
              alt='Federico Garcia — Python Backend Developer'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1
