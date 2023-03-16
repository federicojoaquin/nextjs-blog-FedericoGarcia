import {React} from 'react'
import Proyect from './Proyect'
import proyectImage from '../assets/Projects.PNG'

function Proyects() {

  return (
    <div className='proysContainer'>
      {/* Map */}
      <Proyect proy={proyectImage} 
      titleProy='Administrador Personal' 
      descProy={`En desarrollo, gestor de gastos, finanzas, y tiempos para uso personal. Tecnologías: React, Node.Js, Express y PostgreSql`}
      linkProy='https://github.com/federicojoaquin/Administrador-Personal'/> 
      
      <Proyect proy={proyectImage} 
      titleProy='Agronix S.R.L'
      descProy={`En desarrollo, Página web estática de presentación de empresa Agronix S.R.L dedicada a venta de insumos tecnológicos para el campo. Html, Css y Javascript vanilla.`}
      linkProy='https://github.com/federicojoaquin/Agronix-S.R.L'/>
    </div>
  )
}

export default Proyects
