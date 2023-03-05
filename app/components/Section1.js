import React from 'react'
import Image from 'next/image'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Section1.css'
import developer from '../assets/sysadmin_03.png'

function Section1() {
  return (
    <section className='firstSec container'>
        <div className='row'>
            <div className='col-md-6 col-sm-12 textContainer'>
            <h1 className='titleAboutMe'><b>Sobre mí</b></h1>
            <p className='paragraph'>Estudiante de Ingeniería en Sistemas, desarrollador y diseñador web autodidacta. En constante aprendizaje y simpre mejorando mis habilidades. 
                Diseño páginas web a medida, así como también aplicaciones CRUD.
                </p>
                <button type="button" class="btn btn-light" id='download'>Descargar CV   <i class="bi bi-arrow-down"></i></button>
            {/* <p className='text-description'><b>Hola soy Federico Garcia, full-stack developer</b></p> */}
            </div>
            <div className='col-md-6 col-sm-12'>
                
            <Image className='imageDev' src={developer} width={550} height={400} layout='responsive'></Image>
                
                
            </div>
        </div>
            
    </section>
  )
}

export default Section1
