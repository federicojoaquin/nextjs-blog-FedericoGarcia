"use client"

import {React, useState, useEffect, useRef} from 'react'
import Proyect from './Proyect'
// import proyectImage from '../assets/code_think.svg'
import './Styles/Proyect.css'

function Proyects() {

  const myRef = useRef(); 
  const [myElementIsVisible, setMyElementIsVisible] = useState(); 
  
  useEffect(() => {
    
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]; 
      setMyElementIsVisible(entry.isIntersecting)
    }, {
      root: null,
      rootMargin: '0px 0px 0px 0px', 
      threshold: 0,
    })
    observer.observe(myRef.current); 
   
  }, [])

  return (
    <div className={`proysContainer ${myElementIsVisible ? 'proysVis' : 'proysNotVis'}`} ref={myRef}>
      {/* Map */}

      <Proyect proy={"https://i.ibb.co/XLY4YK7/Gastos-app.jpg"} 
      titleProy='Módulo gastos'
      descProy={`CRUD para carga de gastos, front-end con React, Next.js, Bootstrap. Back-end con Node.js, Express y PostgreSQL. Deploys: Front en Vercel, API en Render.com y base de datos en Neon.`}
      linkProy='https://github.com/federicojoaquin/Nextjs-gastos'
      btn1={true}
      link1={'https://github.com/federicojoaquin/gastosdemo_api'}
      textBtn1='Front'
      textBtn2='API'
      btn2={true}
      link2={'https://nextjs-gastos.vercel.app/'}
      />

      <Proyect proy={"https://i.ibb.co/61bx4hX/Mauri-app.jpg"} 
      titleProy='Mauricio Pereyra blog'
      descProy={`Página web estática de presentación de músico Mauricio Pereyra, con sus álbumes, biografía y contacto. Plantilla HTML editada, Next.js y deploy en Vercel.`}
      linkProy='https://gitlab.com/federicojoaquin/mauriciopereyra-nextjs-blog'
      link2={'https://mauriciopereyra-nextjs-blog.vercel.app/'}
      textBtn1='Visitar'
      btn2={true} />

      <Proyect proy={"https://i.ibb.co/0nYffsW/Agronix-app.jpg"} 
      titleProy='Agronix S.R.L'
      descProy={`En desarrollo, Página web estática de presentación de empresa Agronix S.R.L dedicada a venta de insumos tecnológicos para el campo. Html, Css y Javascript vanilla.`}
      linkProy='https://github.com/federicojoaquin/Agronix-S.R.L'
      textBtn1='Visitar'
      link2={'https://agronixsrl.web.app/'}
      btn2={true}
      />

      <Proyect proy={"https://i.ibb.co/KWJdr26/Administrador.jpg"} 
      titleProy='Administrador Personal' 
      descProy={`En desarrollo, gestor de gastos, finanzas, y tiempos para uso personal. Tecnologías: React, Node.Js, Express y PostgreSql.`}
      linkProy='https://github.com/federicojoaquin/Administrador-Personal'
      textBtn1='Visitar'
      /> 

    </div>
  )
}

export default Proyects


