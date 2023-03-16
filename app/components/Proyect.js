"use client"

import {React, useState, useRef, useEffect} from 'react'
import './Styles/Proyect.css'
import Image from 'next/image'
import Link from 'next/link'
import {Alata} from 'next/font/google'
import {Secular_One} from 'next/font/google'
const secular = Secular_One({ subsets: ['latin'],  weight: ['400'] })
const alata = Alata({ subsets: ['latin'],  weight: ['400'] })

// function Proyect({proy}) {
    
//   return (
//     <div className='proyectContainer' style={{position: 'relative'}} >
//       <div className='imageContainer' style={{position: 'relative'}}>
//         <Image src={proy}
//         fill
//         style={{objectFit: 'contain', borderRadius: 15}}
//         />
//       </div>
//       <div className='textContainer' style={{position: 'relative'}}>
//         <h4 className='nameProy'>Proyecto</h4>
//         <p className='descriptionProy'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu lorem nec leo consequat laoreet. Ut posuere porta nisl in placerat. 
//           Phasellus sed ante eu risus volutpat porttitor.</p>
//       </div>
//       <div className='buttonCont'>
//         <Link class="btnNeon" target="_blank" href={'../Pdf'}><b>Visitar</b> <i class="bi bi-github fs-8 icono" id="visit"></i></Link>
//       </div>
    
//     </div>
//   )
// }

// export default Proyect

function Proyect({proy, titleProy, descProy, linkProy}) {

  const myRef = useRef(); 
  const [myElementIsVisible, setMyElementIsVisible] = useState(); 
  
  useEffect(() => {
    
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]; 
      setMyElementIsVisible(entry.isIntersecting)
    }, {
      root: null,
      rootMargin: '-100px 0px -100px 0px', 
      threshold: 1,
    })
    observer.observe(myRef.current); 
   
  }, [])

  return (
    <div class={`card cardPersTwo ${myElementIsVisible ? 'ligthProy' : ''}`} ref={myRef}>
      <Image src={proy} class="card-img-top" layout='responsive'/>
      <div class="card-body">
        <h5 class={`${secular.className} card-title titleProy`}>{titleProy}</h5>
        <p class={`${alata.className} card-text textProy`}>{descProy}</p>
        <div className='contBtnNeon'>
          <a href={linkProy} target='_blank' class="btnNeonCard" >Visitar    <i class="bi bi-github fs-8 icono" id="visit"></i></a>
        </div>
        
      </div>
    </div>
  )
}

export default Proyect
