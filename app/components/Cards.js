import React from 'react'
import Card from './Card'
import first from '../assets/Icons/First.PNG'
import second from '../assets/Icons/Second.PNG'
import third from '../assets/Icons/Third.PNG'
import fourth from '../assets/Icons/Fourth.PNG'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function cards() {
  return (
    <div className='container cards'>
      <div className='row justify-content-center'>
        <div className='row justify-content-center'>
          <div className='col-md-6 col-sm-12'>
            <div className='cardContainer cont'>
              <Card title='Resolución de conflictos' image={first}/>
            </div>
          </div>
          <div className='col-md-6 col-sm-12'>
            <div className='cardContainer'>
              <Card title='Trabajo en equipo' image={second}/>
            </div>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-md-6 col-sm-12'>
            <div className='cardContainer cont pad'>
              <Card title='Adaptación al cambio' image={third}/>
            </div>
          </div>
          <div className='col-md-6 col-sm-12'>
            <div className='cardContainer pad'>
              <Card title='Aprendizaje constante' image={fourth}/>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default cards
