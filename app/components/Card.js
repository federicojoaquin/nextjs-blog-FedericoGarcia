import React from 'react'
import './Card.css'
import Image from 'next/image'


function Card({title, text, image}) {
  return (
    <div className='card'>
      <div className='image'> 
        <Image src={image} width={50} height={50}></Image>
        <h1 className='title'>{title}</h1>
      </div>
      <div className='text'>
        
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Card
