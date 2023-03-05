import React from 'react'
import './Card.css'
import Image from 'next/image'


function Card({title, text, image}) {
  return (
    <div className='card'>
      <div className='imageCard'> 
        <Image src={image} width={50} height={50}></Image>
        <h1 className='titleCard'>{title}</h1>
      </div>
      <div className='textCard'>
        
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Card
