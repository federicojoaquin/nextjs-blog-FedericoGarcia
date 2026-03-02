"use client"

import { React, useState, useRef, useEffect } from 'react'
import './Styles/Proyect.css'
import Image from 'next/image'
import Link from 'next/link'
import { Alata } from 'next/font/google'
import { Secular_One } from 'next/font/google'
const secular = Secular_One({ subsets: ['latin'], weight: ['400'] })
const alata = Alata({ subsets: ['latin'], weight: ['400'] })

function Proyect({ proy, titleProy, descProy, linkProy, btn1, btn2, link1, link2, textBtn1, textBtn2 }) {

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
    <div className={`card cardPersTwo ${myElementIsVisible ? 'ligthProy' : ''}`} ref={myRef}>
      <div style={{ width: '100%', height: '160px', position: 'relative', overflow: 'hidden', borderRadius: '6px' }} className="my-3">
        <Image src={proy} fill style={{ objectFit: 'cover', objectPosition: 'top' }} alt='Imagen proyecto, portafolio Federico Garcia Full Stack developer' />
      </div>
      <div className="card-body">
        <h5 className={`${secular.className} card-title titleProy`}>{titleProy}</h5>
        <p className={`${alata.className} card-text textProy`}>{descProy}</p>
        <div className={btn1 || btn2 ? 'contBtnNeon2' : 'contBtnNeon'}>
          <a href={linkProy} target='_blank' className={btn1 || btn2 ? 'btnNeonCard2' : 'btnNeonCard'} >{textBtn1}    <i className="bi bi-github fs-8 icono" id="visit"></i></a>
          <a href={link1} target='_blank' className={btn1 ? 'btnNeonCard2' : 'btnFalse'} >{textBtn2}    <i className="bi bi-github fs-8 icono" id="visit"></i></a>
          <a href={link2} target='_blank' className={btn2 ? 'btnNeonCard2' : 'btnFalse'} >Deploy    <i className="bi bi-arrow-down-right-square"></i></a>
        </div>

      </div>
    </div>
  )
}

export default Proyect
