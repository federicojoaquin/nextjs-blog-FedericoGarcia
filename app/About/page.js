import React from 'react'
import './Styles.css'
import Navbar from '../components/Navbar'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import Image from 'next/image'
import image1 from '../assets/Icons/CSS.png'
import image2 from '../assets/Icons/HTML.png'
import image3 from '../assets/Icons/JS.png'
import image4 from '../assets/Icons/Next.png'
import image5 from '../assets/Icons/Node.png'
import image6 from '../assets/Icons/React.png'
import image7 from '../assets/Icons/Oracle.png'
import image8 from '../assets/Icons/Python.png'
import image9 from '../assets/Icons/PLSQL.png'
import image10 from '../assets/Icons/Postgresql.png'
import developer from '../assets/sysadmin_03.png'
import Cards from '../components/Cards'

const Icons = [
  {
    id: 1, 
    name: 'CSS',
    path: image1
  }, 
  {
    id: 2, 
    name: 'HTML',
    path: image2
  }, 
  {
    id: 3, 
    name: 'JS',
    path: image3
  }, 
  {
    id: 4, 
    name: 'Next',
    path: image4
  }, 
  {
    id: 5, 
    name: 'Node',
    path: image5
  }, 
  {
    id: 6, 
    name: 'React',
    path: image6
  }, 
  {
    id: 7, 
    name: 'Oracle',
    path: image7
  }, 
  {
    id: 8, 
    name: 'Python',
    path: image8
  }, 
  {
    id: 9, 
    name: 'PLSQL',
    path: image9
  }, 
  {
    id: 10, 
    name: 'Postgresql',
    path: image10
  }, 

]

function page({children}) {
  return (
    <>
      <Navbar/>
      <div className='About'>
        
        <div className='content'>
          <section className='firstSec container'>
            <div className='row'>
              <div className='col-md-6 col-sm-12 textContainer'>
                <h1><b>Sobre mí</b></h1>
                <p>Estudiante de Ingeniería en Sistemas, desarrollador y diseñador web autodidacta. En constante aprendizaje y simpre mejorando mis habilidades. 
                  Diseño páginas web a medida, así como también aplicaciones CRUD.
                  </p>
                  <button type="button" class="btn btn-light" id='download'>Descargar CV   <i class="bi bi-arrow-down"></i></button>
                {/* <p className='text-description'><b>Hola soy Federico Garcia, full-stack developer</b></p> */}
              </div>
              <div className='col-md-6 col-sm-12'>
                
                <Image className='imageDev' src={developer} width={550} height={400} layout='responsive'></Image>
                
                
              </div>
            </div>
            
          </section>
        <div className='burbles'>
          <div className='burble'></div>
          <div className='burble'></div>
          <div className='burble'></div>
          <div className='burble'></div>
          <div className='burble'></div>
          <div className='burble'></div>
          <div className='burble'></div>
          <div className='burble'></div>
          {/* <div className='burble'></div> */}
          {/* <div className='burble'></div> */}
        </div>
        </div>
        <section className='content2'>
          {/* <Cards /> */}

        </section>
        <section className='content3'>
          {/* <h1 className='titleTec'><b>Habilidades</b></h1> */}
          
          <Cards />
          {/* <div className='container cards'>
            
          </div> */}
          <div className='container tecnologies'>
              
              <div className='iconsContainer'>
                {
                  Icons.map((icon) => (
                  <div className='iconBox'>  
                    <Image className='tecIcons' src={icon.path} width={40} height={40}></Image>
                  </div>  
                  )

                  )
                }
              </div>
              
          </div>
          <div className='wave'>

          </div>
            
        </section>
      </div>
      <footer>
        <h1 className='footerTitle'>Contacto</h1>
      </footer>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"></script>
    </>
  )
}

export default page
