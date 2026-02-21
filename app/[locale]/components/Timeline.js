"use client"

import React, { useEffect, useRef } from 'react';
import image10 from '../assets/Icons/Postgresql.png'
import image11 from '../assets/Icons/Docker.svg'
import image12 from '../assets/Icons/Django.svg'
import image13 from '../assets/Icons/aws.svg'
import image3 from '../assets/Icons/JS.png'
import image7 from '../assets/Icons/Oracle.svg'
import image9 from '../assets/Icons/PLSQL.png'
import image14 from '../assets/Icons/linux.svg'
import image17 from '../assets/Icons/apex.png'
import image18 from '../assets/Icons/forms.svg'
import image19 from '../assets/Icons/reports.svg'
import image4 from '../assets/Icons/Next.png'
import image5 from '../assets/Icons/Node.png'
import image6 from '../assets/Icons/React.png'
import image8 from '../assets/Icons/Python.png'

import Image from 'next/image';
import './Styles/Timeline.css';

function Timeline({ tec, t1, p1, d1, date1, t2, p2, d2, date2, t3, p3, d3, date3 }) {
  const timelineItems = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        } else {
          entry.target.classList.remove('fade-in');
        }
      });
    }, {
      threshold: 0.1
    });

    timelineItems.current.forEach(item => {
      observer.observe(item);
    });

    return () => {
      timelineItems.current.forEach(item => {
        if (item) {
          observer.unobserve(item);
        }
      });
    };
  }, []);

  return (
    <div className="timeline" id="experiencia">
      <div className="timelineContainer">

        <div className="timelineItem" ref={el => timelineItems.current[0] = el}>
          <div className="circle pulse-dot"></div>
          <div className="timelineContent">
            {date1 && <span className="dateChip">{date1}</span>}
            <h3><b>{t1}</b></h3>
            <p><b>{p1}</b></p>
            <div className='tecRow'>
              <p><b>{tec}</b></p>
              <div className='tecContainer'>
                <Image className='tecIcons' src={image8} width={22} height={22} alt='Python' />
                <Image className='tecIcons' src={image10} width={22} height={22} alt='PostgreSQL' />
                <Image className='tecIcons' src={image11} width={22} height={22} alt='Docker' />
                <Image className='tecIcons' src={image12} width={22} height={22} alt='Django' />
                <Image className='tecIcons' src={image13} width={22} height={22} alt='AWS' />
                <Image className='tecIcons' src={image14} width={22} height={22} alt='Linux' />
              </div>
            </div>
            <p className='descText'>{d1}</p>
          </div>
        </div>

        <div className="timelineItem" ref={el => timelineItems.current[1] = el}>
          <div className="circle pulse-dot"></div>
          <div className="timelineContent">
            {date2 && <span className="dateChip">{date2}</span>}
            <h3><b>{t2}</b></h3>
            <p><b>{p2}</b></p>
            <div className='tecRow'>
              <p><b>{tec}</b></p>
              <div className='tecContainer'>
                <Image className='tecIcons' src={image9} width={22} height={22} alt='PL/SQL' />
                <Image className='tecIcons' src={image17} width={22} height={22} alt='Oracle Apex' />
                <Image className='tecIcons' src={image18} width={22} height={22} alt='Oracle Forms' />
                <Image className='tecIcons' src={image19} width={22} height={22} alt='Oracle Reports' />
                <Image className='tecIcons' src={image7} width={22} height={22} alt='Oracle' />
                <Image className='tecIcons' src={image3} width={22} height={22} alt='JavaScript' />
                <Image className='tecIcons' src={image5} width={22} height={22} alt='Node.js' />
                <Image className='tecIcons' src={image14} width={22} height={22} alt='Linux' />
              </div>
            </div>
            <p className='descText'>{d2}</p>
          </div>
        </div>

        <div className="timelineItem" ref={el => timelineItems.current[2] = el}>
          <div className="circle pulse-dot"></div>
          <div className="timelineContent">
            {date3 && <span className="dateChip">{date3}</span>}
            <h3><b>{t3}</b></h3>
            <p><b>{p3}</b></p>
            <div className='tecRow'>
              <p><b>{tec}</b></p>
              <div className='tecContainer'>
                <Image className='tecIcons' src={image4} width={22} height={22} alt='Next.js' />
                <Image className='tecIcons' src={image6} width={22} height={22} alt='React' />
                <Image className='tecIcons' src={image5} width={22} height={22} alt='Node.js' />
                <Image className='tecIcons' src={image8} width={22} height={22} alt='Python' />
              </div>
            </div>
            <p className='descText'>{d3}</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Timeline;
