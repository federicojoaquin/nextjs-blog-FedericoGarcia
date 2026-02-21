"use client"

import { React, useState, useEffect } from 'react'
import Image from 'next/image'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Styles/Section1.css'
import developer from '../assets/sysadmin_03.png'
import Link from 'next/link'
import { Alata } from 'next/font/google'
import { useTranslations } from 'next-intl'

const alata = Alata({ subsets: ['latin'], weight: ['400'] })

function Section1({ title, about, download }) {
  const [downloadLink, setDownloadLink] = useState('');

  useEffect(() => {
    const currentUrl = window.location.href;
    console.log('Current URL:', currentUrl);

    const segments = currentUrl.split('/');
    console.log('URL segments:', segments);

    const languagePrefix = segments[3]; // Get the language prefix from the URL
    console.log('Language prefix:', languagePrefix);

    if (languagePrefix === 'en') {
      setDownloadLink('/pdfs/FedericoGarciaENG.pdf');
    } else if (languagePrefix === 'es') {
      setDownloadLink('/pdfs/FedericoGarciaESP.pdf');
    }
  }, []);

  return (

    <div className='firstSec container' id='sobreMi'>
      <div className='row'>
        <div className='col-md-6 col-sm-12 textContainer'>
          <h1 className={`titleAboutMe`} dangerouslySetInnerHTML={{ __html: title }}></h1>
          <p className={`${alata.className} paragraph`} style={{ marginTop: '1rem', lineHeight: '2rem' }} dangerouslySetInnerHTML={{ __html: about }}></p>
          <a className="btnNeon" href={downloadLink} id="enlaceDescargarPdf" download="FedericoGarcia.pdf" dangerouslySetInnerHTML={{ __html: download }}></a>
        </div>
        <div className='col-md-6 col-sm-12'>

          <Image className='imageDev' src={developer} width={550} height={400} style={{ width: '100%', height: 'auto' }} alt='Image dev flotante, portafolio Federico Garcia Full Stack developer' />


        </div>
      </div>

    </div>
  )
}

export default Section1
