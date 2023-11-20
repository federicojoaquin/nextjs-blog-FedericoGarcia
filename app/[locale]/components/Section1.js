"use client"

import { React, useState, useEffect } from 'react'
import Image from 'next/image'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Styles/Section1.css'
import developer from '../assets/sysadmin_03.png'
import Link from 'next/link'
import { Alata } from 'next/font/google'

const alata = Alata({ subsets: ['latin'], weight: ['400'] })

function Section1() {
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
           <h1 className={`titleAboutMe`}><b>Sobre mí</b></h1>
           <p className={`${alata.className} paragraph`} style={{marginTop: '1rem', lineHeight: '2rem'}}>Desarrollador web y estudiante de Ingeniería en Sistemas. 
           Durante los últimos tres años, he trabajando con una variedad de tecnologías. 
           En un sistema <b>ERP</b>, desempeñé el rol de desarrollo con <b>PL/SQL</b>, así como también soporte técnico al usuario. 
           Actualmente, desarrollo <b>páginas web estáticas a medida</b> como blogs hechos con <b>NEXT.JS</b> y 
           aplicaciones <b>CRUD</b>, trabajando con <b>REACT y NEXT</b> en front-end, <b>NODE.JS y EXPRESS</b> en back-end y <b>PostgreSQL</b> para la base de datos</p>. 
               <a className="btnNeon" href={downloadLink} id="enlaceDescargarPdf" download="FedericoGarcia.pdf"><b>Descargar CV</b> <i class="bi bi-arrow-down"></i></a>
           </div>
           <div className='col-md-6 col-sm-12'>
               
             <Image className='imageDev' src={developer} width={550} height={400} layout='responsive' alt='Image dev flotante, portafolio Federico Garcia Full Stack developer'></Image>
               
               
           </div>
       </div>
           
   </div>
 )
}

export default Section1
