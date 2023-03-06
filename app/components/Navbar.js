"use client"

import {React, useState, useEffect} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'
import './Navbar.css'

function Navbar() {

  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);


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
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }

    if (screen.width < 990) {
      let backgroundTransparacyVar = 1 
      setBackgroundTransparacy(backgroundTransparacyVar); 
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
      <div className="container-fluid justify-content-end">
        <div className='buttonContainer'>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        
        
        
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sobre mí</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Proyectos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Habilidades</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
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
