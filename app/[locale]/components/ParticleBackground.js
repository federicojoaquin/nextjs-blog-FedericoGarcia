"use client"
import React, { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import particlesConfig from '../Js/Particles-config'

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;
  return <Particles id="tsparticles" options={particlesConfig} />;
}
