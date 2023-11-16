import React from 'react'
import Card from './Card'
import tool from '../assets/Icons/tool.svg'
import team from '../assets/Icons/team.svg'
import change from '../assets/Icons/change.svg'
import book from '../assets/Icons/book.svg'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { useTranslation } from 'react-i18next'

function cards() {

  const { t } = useTranslation("global");

  return (
    <div className='container cards'>
      <div className='row justify-content-center'>
        <div className='row justify-content-center'>
          <div className='col-md-6 col-sm-12'>
            <div className='cardContainer cont'>
              <Card title={t('cards.1')} cardImage={tool}/>
            </div>
          </div>
          <div className='col-md-6 col-sm-12'>
            <div className='cardContainer'>
              <Card title={t('cards.2')} cardImage={team}/>
            </div>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-md-6 col-sm-12'>
            <div className='cardContainer cont pad'>
              <Card title={t('cards.3')} cardImage={change}/>
            </div>
          </div>
          <div className='col-md-6 col-sm-12'>
            <div className='cardContainer pad'>
              <Card title={t('cards.4')} cardImage={book}/>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default cards
