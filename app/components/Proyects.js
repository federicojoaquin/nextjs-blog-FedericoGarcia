"use client"

// import {React, useState, useEffect, useRef} from 'react'
// import Proyect from './Proyect'
// import proyectImage from '../assets/code_think.svg'
// import './Styles/Proyect.css'

// function Proyects() {

//   const myRef = useRef(); 
//   const [myElementIsVisible, setMyElementIsVisible] = useState(); 
  
//   useEffect(() => {
    
//     const observer = new IntersectionObserver((entries) => {
//       const entry = entries[0]; 
//       setMyElementIsVisible(entry.isIntersecting)
//     }, {
//       root: null,
//       rootMargin: '0px 0px 0px 0px', 
//       threshold: 0,
//     })
//     observer.observe(myRef.current); 
   
//   }, [])

//   return (
//     <div className={`proysContainer ${myElementIsVisible ? 'proysVis' : 'proysNotVis'}`} ref={myRef}>
//       {/* Map */}
//       <Proyect proy={proyectImage} 
//       titleProy='Administrador Personal' 
//       descProy={`En desarrollo, gestor de gastos, finanzas, y tiempos para uso personal. Tecnologías: React, Node.Js, Express y PostgreSql`}
//       linkProy='https://github.com/federicojoaquin/Administrador-Personal'/> 
      
//       <Proyect proy={proyectImage} 
//       titleProy='Agronix S.R.L'
//       descProy={`En desarrollo, Página web estática de presentación de empresa Agronix S.R.L dedicada a venta de insumos tecnológicos para el campo. Html, Css y Javascript vanilla.`}
//       linkProy='https://github.com/federicojoaquin/Agronix-S.R.L'/>
//     </div>
//   )
// }

// export default Proyects

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Proyect from './Proyect'
import proyectImage from '../assets/code_think.svg'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../components/Styles/Proyects.css'

import { EffectCoverflow, Pagination, Navigation } from 'swiper';



function App() {
  return (
    <div className="container contSwp">
      <h1 className="heading">Flower Gallery</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <Proyect proy={proyectImage} 
          titleProy='Administrador Personal' 
          descProy={`En desarrollo, gestor de gastos, finanzas, y tiempos para uso personal. Tecnologías: React, Node.Js, Express y PostgreSql`}
          linkProy='https://github.com/federicojoaquin/Administrador-Personal'/> 
        </SwiperSlide>
        <SwiperSlide>
          <Proyect proy={proyectImage} 
          titleProy='Agronix S.R.L'
          descProy={`En desarrollo, Página web estática de presentación de empresa Agronix S.R.L dedicada a venta de insumos tecnológicos para el campo. Html, Css y Javascript vanilla.`}
          linkProy='https://github.com/federicojoaquin/Agronix-S.R.L'/>
        </SwiperSlide>
       

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default App;
