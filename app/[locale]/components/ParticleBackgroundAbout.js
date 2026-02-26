"use client"
import React, { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import particlesConfigAbout from '../Js/Particles-config-about'

export default function ParticleBackgroundAbout() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;
  return <Particles id="tsparticles-about" options={particlesConfigAbout} />;
}
