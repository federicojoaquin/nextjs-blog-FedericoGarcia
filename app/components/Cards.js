import React from 'react'
import Card from './Card'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css'

function cards() {
  return (
    <div className='container cards'>
      <div className='row justify-content-center'>
        <div className='row justify-content-center'>
          <div className='col-md-6 col-sm-12'>
            <div className='cardContainer cont'>
              <Card title='Resolución de conflictos' icon="bi bi-wrench"/>
            </div>
          </div>
          <div className='col-md-6 col-sm-12'>
            <div className='cardContainer'>
              <Card title='Trabajo en equipo' icon="bi bi-people-fill"/>
            </div>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-md-6 col-sm-12'>
            <div className='cardContainer cont pad'>
              <Card title='Adaptación al cambio' icon="bi bi-arrow-clockwise"/>
            </div>
          </div>
          <div className='col-md-6 col-sm-12'>
            <div className='cardContainer pad'>
              <Card title='Aprendizaje constante' icon="bi bi-book"/>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default cards
