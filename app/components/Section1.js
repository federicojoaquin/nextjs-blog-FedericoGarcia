"use client"

import {React, useState} from 'react'
import Image from 'next/image'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Styles/Section1.css'
import developer from '../assets/sysadmin_03.png'
import Link from 'next/link'
import {Alata} from 'next/font/google'

const alata = Alata({ subsets: ['latin'],  weight: ['400'] })

function Section1() {

  
  return (
    <div className='firstSec container' id='sobreMi'>
        <div className='row'>
            <div className='col-md-6 col-sm-12 textContainer'>
            <h1 className={`titleAboutMe`}><b>Sobre mí</b></h1>
            <p className={`${alata.className} paragraph`} style={{marginTop: '1rem', lineHeight: '2rem'}}><b>Desarrollador web autodidacta</b> y estudiante de Ingeniería en Sistemas.  
                Cuento con tres años aprendiendo diversas tecologías y he desempeñando <b>rol de desarrollo y soporte</b> en un sistema <b>ERP</b>, en donde me familiaricé con <b>SQL. </b> 
                  Actualemente, me encuentro mejorando mis habilidades en <b>desarrollo web</b>, desde hace dos años. 
                  Desarrollo <b>páginas web estáticas</b> a medida, además implementé nuevas prácticas para el desarrollo de aplicaciones <b>CRUD</b> con tecnologías como <b>REACT.JS, NEXT.JS y NODE.JS</b></p>. 
                {/* <Link class="btnNeon" target="_blank" href={'../Pdf'} id='download' style={{marginTop: '1rem'}}><b>Descargar CV</b> <i class="bi bi-arrow-down"></i></Link> */}
                <a className="btnNeon" href='/pdfs/FedericoGarcia.pdf' id="enlaceDescargarPdf" download="FedericoGarcia.pdf"><b>Descargar CV</b> <i class="bi bi-arrow-down"></i></a>
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
