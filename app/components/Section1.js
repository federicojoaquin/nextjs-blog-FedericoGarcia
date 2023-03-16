import React from 'react'
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
            <p className={`${alata.className} paragraph`} style={{marginTop: '1rem'}}>Estudiante de Ingeniería en Sistemas, <b>desarrollador y diseñador web autodidacta</b>. En constante aprendizaje y simpre mejorando mis habilidades. 
                <b> Diseño páginas web a medida</b>, así como también aplicaciones CRUD.
                </p>
                <Link class="btnNeon" target="_blank" href={'../Pdf'} id='download' style={{marginTop: '1rem'}}><b>Descargar CV</b> <i class="bi bi-arrow-down"></i></Link>
            {/* <p className='text-description'><b>Hola soy Federico Garcia, full-stack developer</b></p> */}
            </div>
            <div className='col-md-6 col-sm-12'>
                
            <Image className='imageDev' src={developer} width={550} height={400} layout='responsive'></Image>
                
                
            </div>
        </div>
            
    </div>
  )
}

export default Section1
