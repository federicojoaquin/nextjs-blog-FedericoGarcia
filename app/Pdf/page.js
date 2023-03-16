// "use client"

// import React, { Component } from 'react';

// class Pdf extends Component {

//     componentDidMount() {
//         if(typeof window.orientation !== "undefined"){
//             document.getElementById('enlaceDescargarPdf').click();
//             window.close();
//         }
//     }
    
//     render() {
//         return (
//             <div style={{position: 'absolute', width: '100%', height: '100%'}}>
//                 <object
//                 data={require('./FedericoGarcia.pdf')}
//                 type="application/pdf"
//                 width="100%"
//                 height="100%"
//                 >
//                     <br />
//                     <a href={require('./FedericoGarcia.pdf')} id="enlaceDescargarPdf"
//                     download="FedericoGarcia.pdf"
//                     >Tu dispositivo no puede visualizar los PDF, da click aquí para descargarlo</a>
//                 </object>
//             </div>
//         );
//     }
// }

// export default Pdf;

import React from 'react'

function page() {
  return (
    <div>
      <embed src="/pdfs/FedericoGarcia.pdf" type="application/pdf" width="100%" height="750px"/>
    </div>
  )
}

export default page
