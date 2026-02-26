import React from 'react'
import Card from './Card'
import './Styles/Card.css'
import tool from '../assets/Icons/tool.svg'
import team from '../assets/Icons/team.svg'
import change from '../assets/Icons/change.svg'
import book from '../assets/Icons/book.svg'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css'

function cards({t1, t2, t3, t4}) {
  return (
    <div className='container cards'>
      <Card title={t1} cardImage={tool}/>
      <Card title={t2} cardImage={team}/>
      <Card title={t3} cardImage={change}/>
      <Card title={t4} cardImage={book}/>
    </div>
  )
}

export default cards
