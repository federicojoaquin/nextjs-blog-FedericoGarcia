"use client"

import React, { useEffect, useState, useRef } from 'react'
import './Styles/Tecnologies.css'
import Image from 'next/image'
import image1 from '../assets/Icons/CSS.png'
import image2 from '../assets/Icons/HTML.png'
import image3 from '../assets/Icons/JS.png'
import image4 from '../assets/Icons/Next.png'
import image5 from '../assets/Icons/Node.png'
import image6 from '../assets/Icons/React.png'
import image7 from '../assets/Icons/Oracle.svg'
import image8 from '../assets/Icons/Python.png'
import image9 from '../assets/Icons/PLSQL.png'
import image10 from '../assets/Icons/Postgresql.png'
import image11 from '../assets/Icons/Docker.svg'
import image12 from '../assets/Icons/Django.svg'
import image13 from '../assets/Icons/aws.svg'
import image14 from '../assets/Icons/linux.svg'
import image15 from '../assets/Icons/haskell.svg'
import image16 from '../assets/Icons/prolog.svg'

const Icons = [
  {
    id: 8, 
    name: 'Python',
    path: image8
  },
  {
    id: 12, 
    name: 'Django',
    path: image12
  }, 
  {
    id: 10, 
    name: 'Postgresql',
    path: image10
  }, 
  {
    id: 11, 
    name: 'Docker',
    path: image11
  }, 
  {
    id: 13, 
    name: 'aws',
    path: image13
  },
  {
    id: 9, 
    name: 'PLSQL',
    path: image9
  }, 
  {
    id: 7, 
    name: 'Oracle',
    path: image7
  }, 
  {
    id: 14, 
    name: 'linux',
    path: image14
  },
  {
    id: 1, 
    name: 'CSS',
    path: image1
  }, 
  {
    id: 2, 
    name: 'HTML',
    path: image2
  }, 
  {
    id: 3, 
    name: 'JS',
    path: image3
  }, 
  {
    id: 6, 
    name: 'React',
    path: image6
  }, 
  {
    id: 4, 
    name: 'Next',
    path: image4
  }, 
  {
    id: 5, 
    name: 'Node',
    path: image5
  }, 
  {
    id: 15, 
    name: 'haskell',
    path: image15
  },
  {
    id: 15, 
    name: 'haskell',
    path: image16
  },
]


function Tecnologies() {
  const myRef = useRef(); 
  const [myElementIsVisible, setMyElementIsVisible] = useState(); 
  
  useEffect(() => {
    
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]; 
      setMyElementIsVisible(entry.isIntersecting)
    })
    observer.observe(myRef.current); 
   
  }, [])


  return (
    <div className='container tecnologies'>
              
        <div className={`iconsContainer ${myElementIsVisible ? 'vis izq' : 'notVis'}`} ref={myRef}>
        {
            Icons.map((icon, i) => (
            <div className='iconBox' key={i}>  
                <Image className='tecIcons' src={icon.path} width={40} height={40}></Image>
                <p style={{fontSize: '0.7rem'}}>python</p>
            </div>  
            )

            )
        }
        </div>
              
    </div>
  )
}

export default Tecnologies
