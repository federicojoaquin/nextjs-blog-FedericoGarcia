"use client"

import {React, useState, useEffect, useRef} from 'react'
import Proyect from './Proyect'
// import proyectImage from '../assets/code_think.svg'
import './Styles/Proyect.css'

function projects({t1, d1, t2, d2, t3, d3, t4, d4, t5, d5, t6, d6}) {

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

      <Proyect proy={"https://i.ibb.co/68N81Kx/Untitled-design-2.png"} 
      titleProy={t5}
      descProy={d5}
      linkProy='https://github.com/federicojoaquin/backend-scanxtract-demo-v1'
      textBtn1='GitHub'
      btn2={false} />

      <Proyect proy={"https://i.ibb.co/68N81Kx/Untitled-design-2.png"} 
      titleProy={t6}
      descProy={d6}
      linkProy='https://github.com/federicojoaquin/backend-sonia-demo-v1'
      textBtn1='GitHub'
      btn2={false} />

      <Proyect proy={"https://i.ibb.co/61bx4hX/Mauri-app.jpg"} 
      titleProy={t2}
      descProy={d2}
      linkProy='https://gitlab.com/federicojoaquin/mauriciopereyra-nextjs-blog'
      link2={'https://mauriciopereyra-nextjs-blog.vercel.app/'}
      textBtn1='GitHub'
      btn2={true} />

      <Proyect proy={"https://i.ibb.co/0nYffsW/Agronix-app.jpg"} 
      titleProy={t3}
      descProy={d3}
      linkProy='https://github.com/federicojoaquin/Agronix-S.R.L'
      textBtn1='GitHub'
      link2={'https://agronixsrl.web.app/'}
      btn2={true}
      />

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

      <Proyect proy={"https://i.ibb.co/KWJdr26/Administrador.jpg"} 
      titleProy={t4}
      descProy={d4}
      linkProy='https://github.com/federicojoaquin/Administrador-Personal'
      textBtn1='GitHub'
      /> 

    </div>
  )
}

export default projects


