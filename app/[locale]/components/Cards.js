import React from 'react'
import Card from './Card'
import tool from '../assets/Icons/tool.svg'
import team from '../assets/Icons/team.svg'
import change from '../assets/Icons/change.svg'
import book from '../assets/Icons/book.svg'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css'

function cards() {
  return (
    <div className='container cards'>
      <div className='row justify-content-center'>
        <div className='row justify-content-center'>
          <div className='col-md-6 col-sm-12'>
            <div className='cardContainer cont'>
              <Card title='Resolución de conflictos' cardImage={tool}/>
            </div>
          </div>
          <div className='col-md-6 col-sm-12'>
            <div className='cardContainer'>
              <Card title='Trabajo en equipo' cardImage={team}/>
            </div>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-md-6 col-sm-12'>
            <div className='cardContainer cont pad'>
              <Card title='Adaptación al cambio' cardImage={change}/>
            </div>
          </div>
          <div className='col-md-6 col-sm-12'>
            <div className='cardContainer pad'>
              <Card title='Aprendizaje constante' cardImage={book}/>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default cards
