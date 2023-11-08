"use client"

import {React, useState, useEffect} from 'react'
import Image from 'next/image'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Styles/Section1.css'
import developer from '../assets/sysadmin_03.png'
import Link from 'next/link'
import {Alata} from 'next/font/google'
import { useTranslation } from 'react-i18next';

const alata = Alata({ subsets: ['latin'],  weight: ['400'] })

function Section1() {

  const { t, i18n } = useTranslation("global");
  const [downloadLink, setDownloadLink] = useState('/pdfs/FedericoGarciaENG.pdf');

  useEffect(() => {
    if (i18n.language === 'en') {
      setDownloadLink('/pdfs/FedericoGarciaENG.pdf');
    } else if (i18n.language === 'es') {
      setDownloadLink('/pdfs/FedericoGarciaESP.pdf');
    }
    }, [i18n.language]);
   
  
  return (
    <div className='firstSec container' id='sobreMi'>
        <div className='row'>
            <div className='col-md-6 col-sm-12 textContainer'>
            <h1 className={`titleAboutMe`} dangerouslySetInnerHTML={{ __html: t('about_title') }}></h1>
            <p className={`${alata.className} paragraph`} style={{marginTop: '1rem', lineHeight: '2rem'}} dangerouslySetInnerHTML={{ __html: t('about_me') }}></p>. 
                {/* <Link class="btnNeon" target="_blank" href={'../Pdf'} id='download' style={{marginTop: '1rem'}}><b>Descargar CV</b> <i class="bi bi-arrow-down"></i></Link> */}
                <a className="btnNeon" href={downloadLink} id="enlaceDescargarPdf" download="FedericoGarcia.pdf">
                  <b>Descargar CV</b> <i class="bi bi-arrow-down"></i>
                </a>
            {/* <p className='text-description'><b>Hola soy Federico Garcia, full-stack developer</b></p> */}
            </div>
            <div className='col-md-6 col-sm-12'>
                
              <Image className='imageDev' src={developer} width={550} height={400} layout='responsive' alt='Image dev flotante, portafolio Federico Garcia Full Stack developer'></Image>
                
                
            </div>
        </div>
            
    </div>
  )
}

export default Section1
