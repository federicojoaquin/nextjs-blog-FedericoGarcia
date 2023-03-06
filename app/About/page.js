import React from 'react'
import './pageStyles.css'
import Navbar from '../components/Navbar'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import Section1 from '../components/Section1'
import Burbles from '../components/Burbles'
import Cards from '../components/Cards'
import Tecnologies from '../components/Tecnologies'
import Image from 'next/image'

function page({children}) {
  return (
    <body>
      <Navbar/>
      <div className='About'>
        
        <div className='content'>
          <Section1 />
          <Burbles />
        </div>
        <section className='content2'>
          {/* <Cards /> */}

        </section>
        <section className='content3'>
        
          <Cards />
          <Tecnologies />

          <div className='wave'></div>
            
        </section>
      </div>
      <footer>
        <h1 className='footerTitle'>Contacto</h1>
        <div className='contactContainer'>
          <div className='boxIcon'>
            <a href='https://www.linkedin.com/in/federico-garcia-9614a6236/' className="bi bi-linkedin fs-8 icono"></a>
          </div>
          <div className='boxIcon'>
            <a href='https://www.linkedin.com/in/federico-garcia-9614a6236/' className="bi bi-github fs-8 icono"></a>
          </div>
          
        </div>
      </footer>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"></script>
    </body>
  )
}

export default page
