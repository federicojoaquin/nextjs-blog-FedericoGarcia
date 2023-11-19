"use client"

import {React, useEffect, useRef, useState} from 'react'
import './Styles/Card.css'
import Image from 'next/image'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import {Secular_One} from 'next/font/google'
const secular = Secular_One({ subsets: ['latin'],  weight: ['400'] })

function Card({title, cardImage, cardText}) {

  const myRef = useRef(); 
  const [myElementIsVisible, setMyElementIsVisible] = useState(); 
  
  useEffect(() => {
    
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]; 
      setMyElementIsVisible(entry.isIntersecting)
    }, {
      root: null,
      rootMargin: '-170px 0px -170px 0px', 
      threshold: 1,
    })
    observer.observe(myRef.current); 
   
  }, [])

  return (
    <div className={`card cardPresOne ${myElementIsVisible ? 'ligth' : ''}`} ref={myRef}>
      <div className='imageCard'> 
        <Image src={cardImage} width={35} height={35}></Image>
        <h1 className={`${secular.className} titleCard`}>{title}</h1>
      </div>
      <p>{cardText}</p>
    </div>
  )
}

export default Card
