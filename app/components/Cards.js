import React from 'react'
import Card from './Card'
// import Tool from '../assets/Icons/Tool.PNG'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function cards() {
  return (
    <div className='container cards'>
      <div className='row justify-content-center'>
        <div className='row justify-content-center'>
          <div className='col-md-6 col-sm-12'>
            <div className='cardContainer cont'>
              <Card title='Resolución de conflictos'/>
            </div>
          </div>
          <div className='col-md-6 col-sm-12'>
            <div className='cardContainer'>
              <Card title='Trabajo en equipo'/>
            </div>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-md-6 col-sm-12'>
            <div className='cardContainer cont pad'>
              <Card title='Adaptación al cambio'/>
            </div>
          </div>
          <div className='col-md-6 col-sm-12'>
            <div className='cardContainer pad'>
              <Card title='Aprendizaje constante'/>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default cards
