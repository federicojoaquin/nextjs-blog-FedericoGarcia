"use client"

import { React, useState, useEffect } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Image from 'next/image'
import Link from 'next/link'
import './Styles/Navbar.css'
import reatraitNav from '../Federico.jpg'
import LanguageDropdown from './LanguagesDropdown'
import ThemeToggle from './ThemeToggle'
import { useTheme } from './providers/ThemeProvider'

function Navbar({ home, about, skills, experience, projects, contact }) {
  const { theme } = useTheme();

  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [locale, setLocale] = useState('');
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

  useEffect(() => {
    const currentUrl = window.location.href;
    const segments = currentUrl.split('/');
    const languagePrefix = segments[3];
    setLocale(languagePrefix);
  }, []);

  const navbarBg = theme === 'dark' 
    ? `rgba(13, 15, 20, ${Math.min(backgroundTransparacy + 0.1, 0.92)})`
    : `rgba(245, 247, 250, ${Math.min(backgroundTransparacy + 0.1, 0.92)})`;

  return (
    <nav className="navbar navbar-expand-lg fixed-top"
      style={{
        background: navbarBg,
        backgroundColor: navbarBg,
        backdropFilter: backgroundTransparacy > 0.05 ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: backgroundTransparacy > 0.05 ? 'blur(12px)' : 'none',
        padding: `${padding}px 0px`,
        boxShadow: backgroundTransparacy > 0.3 ? `0 1px 0 var(--border)` : 'none',
        borderBottom: backgroundTransparacy > 0.3 ? `1px solid var(--border)` : 'none',
      }}
      id='navDef'>
      <div className="container-fluid">

        <Image src={reatraitNav} width={40} height={40} className='retraitNav' style={{ opacity: `${imgOpacity}` }} alt='Retrato Federico Garcia, portafolio Federico Garcia Full Stack developer' />
        <button className="navbar-toggler navbar-toggler-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-controls">
          <LanguageDropdown reflink='/About' />
          <ThemeToggle />
        </div>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link nav-link-custom" aria-current="page" href={`/${locale}`}><b>{home}</b></Link>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#sobreMi"><b>{about}</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#tecnologias"><b>{skills}</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#experiencia"><b>{experience}</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#proyectos"><b>{projects}</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#contacto"><b>{contact}</b></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
