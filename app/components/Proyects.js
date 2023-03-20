"use client"

import {React, useState, useEffect, useRef} from 'react'
import Proyect from './Proyect'
import proyectImage from '../assets/code_think.svg'
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
      <Proyect proy={proyectImage} 
      titleProy='Administrador Personal' 
      descProy={`En desarrollo, gestor de gastos, finanzas, y tiempos para uso personal. Tecnologías: React, Node.Js, Express y PostgreSql`}
      linkProy='https://github.com/federicojoaquin/Administrador-Personal'/> 
      
      <Proyect proy={proyectImage} 
      titleProy='Agronix S.R.L'
      descProy={`En desarrollo, Página web estática de presentación de empresa Agronix S.R.L dedicada a venta de insumos tecnológicos para el campo. Html, Css y Javascript vanilla.`}
      linkProy='https://github.com/federicojoaquin/Agronix-S.R.L'/>
    </div>
  )
}

export default Proyects
