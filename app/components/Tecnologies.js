import React from 'react'
import './Tecnologies.css'
import Image from 'next/image'
import image1 from '../assets/Icons/CSS.png'
import image2 from '../assets/Icons/HTML.png'
import image3 from '../assets/Icons/JS.png'
import image4 from '../assets/Icons/Next.png'
import image5 from '../assets/Icons/Node.png'
import image6 from '../assets/Icons/React.png'
import image7 from '../assets/Icons/Oracle.png'
import image8 from '../assets/Icons/Python.png'
import image9 from '../assets/Icons/PLSQL.png'
import image10 from '../assets/Icons/Postgresql.png'

const Icons = [
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
    id: 6, 
    name: 'React',
    path: image6
  }, 
  {
    id: 7, 
    name: 'Oracle',
    path: image7
  }, 
  {
    id: 8, 
    name: 'Python',
    path: image8
  }, 
  {
    id: 9, 
    name: 'PLSQL',
    path: image9
  }, 
  {
    id: 10, 
    name: 'Postgresql',
    path: image10
  }, 

]


function Tecnologies() {
  return (
    <div className='container tecnologies'>
              
        <div className='iconsContainer'>
        {
            Icons.map((icon) => (
            <div className='iconBox'>  
                <Image className='tecIcons' src={icon.path} width={40} height={40}></Image>
            </div>  
            )

            )
        }
        </div>
              
    </div>
  )
}

export default Tecnologies
