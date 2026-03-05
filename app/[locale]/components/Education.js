"use client"

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import imageAR from '../assets/Icons/argentina.svg';
import logoSiglo21 from '../assets/siglo21-logo.png';
import logoUTN from '../assets/utn-logo.png';
import './Styles/Education.css';

function Education({ title1, degree1_1, degree1_2, period1, title2, degree2_1, period2 }) {
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('edu-visible');
        }
      });
    }, { threshold: 0.1 });

    itemRefs.current.forEach(item => {
      if (item) observer.observe(item);
    });

    return () => {
      itemRefs.current.forEach(item => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div className="edu-section" id="educacion">

      {/* Siglo XXI — izquierda */}
      <div className="edu-row edu-row-left" ref={el => itemRefs.current[0] = el}>
        <div className="edu-dot pulse-dot"></div>
        <div className="edu-card">
          {period1 && <span className="dateChip">{period1}</span>}
          <div className="edu-card-inner">
            <div className="edu-card-text">
              <h3>
                <b>{title1}</b>{' '}
                {/* <Image src={imageAR} width={20} height={20} alt='Argentina' style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '6px' }} /> */}
              </h3>
              <p style={{ marginBottom: '0.3rem' }}><b>{degree1_1}</b></p>
              <p>{degree1_2}</p>
            </div>
            <div className="edu-logo-wrap">
              <Image src={logoSiglo21} width={120} height={43} alt='Universidad Siglo XXI' className="edu-logo" />
            </div>
          </div>
        </div>
      </div>

      {/* UTN — derecha */}
      <div className="edu-row edu-row-right" ref={el => itemRefs.current[1] = el}>
        <div className="edu-dot pulse-dot"></div>
        <div className="edu-card">
          {period2 && <span className="dateChip">{period2}</span>}
          <div className="edu-card-inner">
            <div className="edu-card-text">
              <h3>
                <b>{title2}</b>{' '}
                {/* <Image src={imageAR} width={20} height={20} alt='Argentina' style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '6px' }} /> */}
              </h3>
              <p><b>{degree2_1}</b></p>
            </div>
            <div className="edu-logo-wrap">
              <Image src={logoUTN} width={110} height={39} alt='Universidad Tecnológica Nacional' className="edu-logo edu-logo-utn" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Education;
