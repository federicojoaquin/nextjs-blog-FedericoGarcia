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
import imageN8n from '../assets/Icons/n8n.svg'
import imageRedux from '../assets/Icons/redux.svg'
import imageTerraform from '../assets/Icons/terraform.svg'
import imageAnthropic from '../assets/Icons/anthropic.svg'
import imageGemini from '../assets/Icons/gemini.svg'
import imageCodex from '../assets/Icons/codex.svg'
import imageOpenCode from '../assets/opencode-logo.png'
import imageAntigravity from '../assets/antigravity-color.png'

const getCategories = (aiLabel) => [
  {
    label: 'Backend',
    icons: [
      { name: 'Python', path: image8 },
      { name: 'Django', path: image12 },
      { name: 'PostgreSQL', path: image10 },
      { name: 'PL/SQL', path: image9 },
      { name: 'Oracle', path: image7 },
      { name: 'Apex', path: image17 },
      { name: 'Forms', path: image18 },
      { name: 'Reports', path: image19 },
    ]
  },
  {
    label: 'Cloud & DevOps',
    icons: [
      { name: 'AWS', path: image13 },
      { name: 'Docker', path: image11 },
      { name: 'Linux', path: image14 },
      { name: 'Terraform', path: imageTerraform },
    ]
  },
  {
    label: 'Frontend',
    icons: [
      { name: 'React', path: image6 },
      { name: 'Next.js', path: image4 },
      { name: 'Node.js', path: image5 },
      { name: 'JavaScript', path: image3 },
      { name: 'HTML', path: image2 },
      { name: 'CSS', path: image1 },
      { name: 'Redux', path: imageRedux },
    ]
  },
  {
    label: aiLabel,
    icons: [
      { name: 'Claude Code', path: imageAnthropic },
      { name: 'Codex', path: imageCodex },
      { name: 'Gemini', path: imageGemini },
      { name: 'OpenCode', path: imageOpenCode },
      { name: 'Antigravity', path: imageAntigravity },
      { name: 'n8n', path: imageN8n },
    ]
  },
  {
    label: 'Academic',
    icons: [
      { name: 'Haskell', path: image15 },
      { name: 'Prolog', path: image16 },
    ]
  }
]

function Tecnologies({ aiLabel }) {
  const myRef = useRef();
  const [myElementIsVisible, setMyElementIsVisible] = useState();
  const categories = getCategories(aiLabel || 'AI & Automation')

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setMyElementIsVisible(entry.isIntersecting)
    })
    observer.observe(myRef.current);
  }, [])

  return (
    <div className='tecnologies-section' id='tecnologias'>
      <div className='container'>
        <div className={`tec-grid ${myElementIsVisible ? 'vis' : 'notVis'}`} ref={myRef}>
          {categories.map((cat, ci) => (
            <div className='tec-category' key={ci}>
              <h3 className='category-title'>{cat.label}</h3>
              <div className='pills-row'>
                {cat.icons.map((icon, i) => (
                  <div className='pill-card' key={i}>
                    <Image className='pill-icon' src={icon.path} width={28} height={28} alt={icon.name} />
                    <span className='pill-name'>{icon.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tecnologies
