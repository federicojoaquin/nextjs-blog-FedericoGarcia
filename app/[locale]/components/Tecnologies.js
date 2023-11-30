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
import image17 from '../assets/Icons/apex.png'
import image18 from '../assets/Icons/forms.svg'
import image19 from '../assets/Icons/reports.svg'
import image20 from '../assets/Icons/designer.svg'

const Icons = [
  {
    id: 1, 
    name: 'Python',
    path: image8
  },
  {
    id: 2, 
    name: 'Django',
    path: image12
  }, 
  {
    id: 3, 
    name: 'Postgre',
    path: image10
  }, 
  {
    id: 4, 
    name: 'Docker',
    path: image11
  }, 
  {
    id: 5, 
    name: 'Aws',
    path: image13
  },
  {
    id: 6, 
    name: 'Plsql',
    path: image9
  }, 
  {
    id: 7, 
    name: 'Oracle',
    path: image7
  }, 
  {
    id: 18, 
    name: 'forms',
    path: image18
  },
  {
    id: 19, 
    name: 'reports',
    path: image19
  },
  {
    id: 17, 
    name: 'Apex',
    path: image17
  },
  {
    id: 20, 
    name: 'Designer',
    path: image20
  },
  {
    id: 8, 
    name: 'Terminal',
    path: image14
  },
  {
    id: 9, 
    name: 'Css',
    path: image1
  }, 
  {
    id: 10, 
    name: 'Html',
    path: image2
  }, 
  {
    id: 11, 
    name: 'Js',
    path: image3
  }, 
  {
    id: 12, 
    name: 'React',
    path: image6
  }, 
  {
    id: 13, 
    name: 'Next',
    path: image4
  }, 
  {
    id: 14, 
    name: 'Node',
    path: image5
  }, 
  // {
  //   id: 15, 
  //   name: 'Haskell',
  //   path: image15
  // },
  // {
  //   id: 16, 
  //   name: 'Prolog',
  //   path: image16
  // },
]


function Tecnologies() {
  const myRef = useRef(); 
  const [myElementIsVisible, setMyElementIsVisible] = useState(); 
  const [isHovering, setIsHovering] = useState(new Array(Icons.length).fill(false));
  
  useEffect(() => {
    
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]; 
      setMyElementIsVisible(entry.isIntersecting)
    })
    observer.observe(myRef.current); 
   
  }, [])

  const handleMouseEnter = (index) => {
    setIsHovering(prevState => {
     const newState = [...prevState];
     newState[index] = true;
     return newState;
    });
   };
   
   const handleMouseLeave = (index) => {
    setIsHovering(prevState => {
     const newState = [...prevState];
     newState[index] = false;
     return newState;
    });
   };


  return (
    <div className='container tecnologies'>
              
        <div className={`iconsContainer ${myElementIsVisible ? 'vis izq' : 'notVis'}`} ref={myRef}>
        {
            Icons.map((icon, i) => (
            <div className='iconBox' key={i}>  
                <Image className='tecIcons' src={icon.path} width={40} height={40} key={i} onMouseEnter={() => handleMouseEnter(i)} onMouseLeave={() => handleMouseLeave(i)}></Image>
                <p style={{fontSize: '0.7rem', textAlign: 'center', marginTop: '5px', color: isHovering[i] ? '#08a9da' : 'black'}}>{icon.name}</p>
            </div>  
            )

            )
        }
        </div>
              
    </div>
  )
}

export default Tecnologies
