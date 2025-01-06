import React from 'react'
import './pageStyles.css'
import Navbar from '../components/Navbar'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import Section1 from '../components/Section1'
import Burbles from '../components/Burbles'
import Cards from '../components/Cards'
import Tecnologies from '../components/Tecnologies'
import Image from 'next/image'
import Proyects from '../components/Proyects'
import {Secular_One} from 'next/font/google'
const secular = Secular_One({ subsets: ['latin'],  weight: ['400'] })
import { NextIntlClientProvider } from 'next-intl';
import {useTranslations} from 'next-intl'
import Timeline from '../components/Timeline'

function page({children}) {
  
  const t = useTranslations('about');
  const messages = (import(`../../../messages/en.json`)).default;

  return (
    <body>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"></script>
      <Navbar 
      home={t('nav.home')}
      about={t('nav.about')}
      skills={t('nav.skills')}
      experience={t('nav.experience')}
      projects={t('nav.projects')}
      contact={t('nav.contact')}
          
      />
      <div className='About'>
        
        <div className='content'>
          <section id='sobreMi'>
           
            <Section1 title={t.markup('about_title', {
              b: (chunks) => `<b>${chunks}</b>`
            })} 
            about= {t.markup('about_me', {
              b: (chunks) => `<b>${chunks}</b>`
            })} 
            download={t.markup('download_button', {
              b: (chunks) => `<b>${chunks}</b>`,
            })} 
            />
           
            <Burbles />
          </section> 
        </div>
        <section className='content2' id='tecnologias'>
          <h1 className='titleTec'><b>{t('skills')}</b></h1>   
          <Tecnologies />
          <Cards 
          t1={t('cards.1')}
          t2={t('cards.2')}
          t3={t('cards.3')}
          t4={t('cards.4')} 
          />
          
    
        </section>
        <section className='content4' id='experiencia'>
          <h1 className='titleTec'><b>{t('experience')}</b></h1>  
          <Timeline 
          t1={t('companies.1.title')}
          t2={t('companies.2.title')}
          t3={t('companies.3.title')}
          p1={t('companies.1.period')}
          p2={t('companies.2.period')}
          p3={t('companies.3.period')}
          d1={t('companies.1.des')}
          d2={t('companies.2.des')}
          d3={t('companies.3.des')}
          />
        </section>
        <section className='content3' id='proyectos'>
          {/* <Cards /> */}
            <h1 className='titleTec'><b>{t('projects')}</b></h1>
            <Proyects
            t5={t('proyect.5.title')}
            d5={t('proyect.5.des')}
            t6={t('proyect.6.title')}
            d6={t('proyect.6.des')}
            t1={t('proyect.1.title')}
            d1={t('proyect.1.des')}
            t2={t('proyect.2.title')}
            d2={t('proyect.2.des')}
            t3={t('proyect.3.title')}
            d3={t('proyect.3.des')}
            t4={t('proyect.4.title')}
            d4={t('proyect.4.des')}
            />
            
            
          <div className='wave'></div>
          
        </section>
        
      </div>
      <footer id='contacto'>
        
        <h1 className='footerTitle'>{t('contact')}</h1>
        <div className='contactContainer'>
          <div className='boxIcon'>
            <a href='https://www.linkedin.com/in/federico-garcia-9614a6236/' className="bi bi-linkedin fs-8 icono"></a>
          </div>
          <div className='boxIcon'>
            <a href='https://github.com/federicojoaquin?tab=repositories' className="bi bi-github fs-8 icono"></a>
          </div>
          
        </div>
      </footer>
      {/* <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"></script> */}
    </body>
  )
}

export default page
