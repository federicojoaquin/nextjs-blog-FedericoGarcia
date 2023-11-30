"use client"

import {React, useState, useEffect, useRef} from 'react'
import Proyect from './Proyect'
// import proyectImage from '../assets/code_think.svg'
import './Styles/Proyect.css'

function projects({t1, d1, t2, d2, t3, d3, t4, d4}) {

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
      titleProy={t1}
      descProy={d1}
      linkProy='https://github.com/federicojoaquin/Nextjs-gastos'
      btn1={true}
      link1={'https://github.com/federicojoaquin/gastosdemo_api'}
      textBtn1='Front'
      textBtn2='API'
      btn2={true}
      link2={'https://nextjs-gastos.vercel.app/'}
      />

      <Proyect proy={"https://i.ibb.co/61bx4hX/Mauri-app.jpg"} 
      titleProy={t2}
      descProy={d2}
      linkProy='https://gitlab.com/federicojoaquin/mauriciopereyra-nextjs-blog'
      link2={'https://mauriciopereyra-nextjs-blog.vercel.app/'}
      textBtn1='Visitar'
      btn2={true} />

      <Proyect proy={"https://i.ibb.co/0nYffsW/Agronix-app.jpg"} 
      titleProy={t3}
      descProy={d3}
      linkProy='https://github.com/federicojoaquin/Agronix-S.R.L'
      textBtn1='Visitar'
      link2={'https://agronixsrl.web.app/'}
      btn2={true}
      />

      <Proyect proy={"https://i.ibb.co/KWJdr26/Administrador.jpg"} 
      titleProy={t4}
      descProy={d4}
      linkProy='https://github.com/federicojoaquin/Administrador-Personal'
      textBtn1='Visitar'
      /> 

    </div>
  )
}

export default projects


