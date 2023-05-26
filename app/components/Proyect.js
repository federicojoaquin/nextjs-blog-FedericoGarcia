"use client"

import {React, useState, useRef, useEffect} from 'react'
import './Styles/Proyect.css'
import Image from 'next/image'
import Link from 'next/link'
import {Alata} from 'next/font/google'
import {Secular_One} from 'next/font/google'
const secular = Secular_One({ subsets: ['latin'],  weight: ['400'] })
const alata = Alata({ subsets: ['latin'],  weight: ['400'] })

function Proyect({proy, titleProy, descProy, linkProy, btn1, btn2, link1, link2, textBtn1, textBtn2}) {

  const myRef = useRef(); 
  const [myElementIsVisible, setMyElementIsVisible] = useState(); 
  
  useEffect(() => {
    
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]; 
      setMyElementIsVisible(entry.isIntersecting)
    }, {
      root: null,
      rootMargin: '0px 0px 0px 0px', 
      threshold: 1,
    })
    observer.observe(myRef.current); 
   
  }, [])

  return (
    <div class={`card cardPersTwo ${myElementIsVisible ? 'ligthProy' : ''}`} ref={myRef}>
      <Image src={proy} class="card-img-top my-3" layout='responsive' width={700} height={200} alt='Imagen proyecto, portafolio Federico Garcia Full Stack developer'/>
      <div class="card-body">
        <h5 class={`${secular.className} card-title titleProy`}>{titleProy}</h5>
        <p class={`${alata.className} card-text textProy`}>{descProy}</p>
        <div className={btn1 || btn2 ? 'contBtnNeon2' : 'contBtnNeon'}>
          <a href={linkProy} target='_blank' className={btn1 || btn2 ? 'btnNeonCard2' : 'btnNeonCard'} >{textBtn1}    <i class="bi bi-github fs-8 icono" id="visit"></i></a>
          <a href={link1} target='_blank' className={btn1 ? 'btnNeonCard2' : 'btnFalse'} >{textBtn2}    <i class="bi bi-github fs-8 icono" id="visit"></i></a>
          <a href={link2} target='_blank' className={btn2 ? 'btnNeonCard2' : 'btnFalse'} >Deploy    <i class="bi bi-arrow-down-right-square"></i></a>
        </div>
        
      </div>
    </div>
  )
}

export default Proyect
