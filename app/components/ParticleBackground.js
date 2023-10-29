"use client"

import React, { useCallback } from 'react'
import Particles from "react-tsparticles"
import {loadFull} from 'tsparticles'
import particlesConfig from '../Js/Particles-config'

function ParticleBackground() {
  
    const particlesInit = useCallback((engine) => { 
        loadFull(engine)
    }, [])

  return (
    <Particles
            id="tsparticles"
            init={particlesInit}
            options={particlesConfig}
        />
  )
}

export default ParticleBackground



