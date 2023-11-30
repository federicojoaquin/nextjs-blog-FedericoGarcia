"use client"

import React, { useEffect, useRef } from 'react';
import image10 from '../assets/Icons/Postgresql.png'
import image8 from '../assets/Icons/Python.png'
import image11 from '../assets/Icons/Docker.svg'
import image12 from '../assets/Icons/Django.svg'
import image13 from '../assets/Icons/aws.svg'
import image3 from '../assets/Icons/JS.png'
import image5 from '../assets/Icons/Node.png'
import image7 from '../assets/Icons/Oracle.svg'
import image9 from '../assets/Icons/PLSQL.png'
import image14 from '../assets/Icons/linux.svg'
import image17 from '../assets/Icons/apex.png'
import image18 from '../assets/Icons/forms.svg'
import image19 from '../assets/Icons/reports.svg'

import Image from 'next/image';
import './Styles/Timeline.css'; 

function Timeline({tec, t1, p1, d1, t2, p2, d2, t3, p3, d3}) {
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
   <div className="timeline">
     <div className="timelineContainer">
       <div className="timelineItem" ref={el => timelineItems.current[0] = el}>
         <div className="circle"></div>
         <div className="timelineContent">
           <h3>{t1}</h3>
           <p><b>{p1}</b></p>
           <div style={{display: 'flex', flexDirection: 'row'}}>
            <p><b>{tec}</b></p>
            <div className='tecContainer'>
              <Image className='tecIcons' src={image8} width={25} height={25}/>
              <Image className='tecIcons' src={image10} width={25} height={25}/>
              <Image className='tecIcons' src={image11} width={25} height={25}/>
              <Image className='tecIcons' src={image12} width={25} height={25}/>
              <Image className='tecIcons' src={image13} width={25} height={25}/>
              <Image className='tecIcons' src={image14} width={25} height={25}/>
            </div>
           </div>
           
           <p>{d1}</p>
         </div>
       </div>

       <div className="timelineItem" ref={el => timelineItems.current[1] = el}>
         <div className="circle"></div>
         <div className="timelineContent">
           <h3>{t2}</h3>
           <p><b>{p2}</b></p>
           
           <div style={{display: 'flex', flexDirection: 'row'}}>
            <p><b>{tec}</b></p>
            <div className='tecContainer'>
              <Image className='tecIcons' src={image9} width={25} height={25}/>
              <Image className='tecIcons' src={image17} width={25} height={25}/>
              <Image className='tecIcons' src={image18} width={25} height={25}/>
              <Image className='tecIcons' src={image19} width={25} height={25}/>
              <Image className='tecIcons' src={image7} width={25} height={25}/>
              <Image className='tecIcons' src={image3} width={25} height={25}/>
              <Image className='tecIcons' src={image5} width={25} height={25}/>
              <Image className='tecIcons' src={image14} width={25} height={25}/>
              
            </div>
           </div>
           <p>{d2}</p>
         </div>
       </div>
      
       <div className="timelineItem" ref={el => timelineItems.current[2] = el}>
         <div className="circle"></div>
         <div className="timelineContent">
           <h3>{t3}</h3>
           <p><b>{p3}</b></p>
           <div style={{display: 'flex', flexDirection: 'row'}}>
            <p><b>{tec}</b></p>
            <div className='tecContainer'>
              <Image className='tecIcons' src={image8} width={25} height={25}/>
              <Image className='tecIcons' src={image10} width={25} height={25}/>
              <Image className='tecIcons' src={image11} width={25} height={25}/>
              <Image className='tecIcons' src={image12} width={25} height={25}/>
              <Image className='tecIcons' src={image13} width={25} height={25}/>
              <Image className='tecIcons' src={image14} width={25} height={25}/>
            </div>
           </div>
           
           <p>{d3}</p>
         </div>
       </div>

     </div>
   </div>
 );
}

export default Timeline;
