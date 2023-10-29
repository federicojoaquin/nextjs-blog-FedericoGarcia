"use client"

import {React, useState, useEffect} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Image from 'next/image'
import Link from 'next/link'
import './Styles/Navbar.css'
import reatraitNav from '../Federico.jpg'

function Navbar() {

  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);
  const [imgOpacity, setImgOpacity] = useState(0); 


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;
  
    if (backgroundTransparacyVar < 1) {
      let paddingVar = 30 - backgroundTransparacyVar * 20;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      let imgOpacity = backgroundTransparacyVar * 1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setImgOpacity(imgOpacity)
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }

    if (screen.width < 990) {
      let backgroundTransparacyVar = 1
      let paddingVar = 15; 
      let imgOpacity = 1;
      setPadding(paddingVar);
      setBackgroundTransparacy(backgroundTransparacyVar); 
      setImgOpacity(imgOpacity); 
    }
    
  }, [clientWindowHeight]);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top"
    style={{
      background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
      padding: `${padding}px 0px`,
      boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
    }}
    id='navDef'>
      <div className="container-fluid">
        
        <Image src={reatraitNav} width={40} height={40} className='retraitNav' style={{opacity: `${imgOpacity}`}} alt='Retrato Federico Garcia, portafolio Federico Garcia Full Stack developer' />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href={'/'}><b>Home</b></Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#sobreMi"><b>Sobre mí</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tecnologias"><b>Habilidades</b></a>
              
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#proyectos"><b>Proyectos</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto"><b>Contacto</b></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    // <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
    //   <div className="container">
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>

    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <div className="mx-auto"></div>
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <a className="nav-link text-white links" href="#">Home</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link text-white links" href="#">About</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link text-white links" href="#">Blog</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link text-white links" href="#">Pricing</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link text-white links" href="#">Contact</a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

  )
}

export default Navbar
