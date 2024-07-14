import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg/index.js';

function App() {
  const [mostrarFormulario,actualizarMostrar]=useState(true)

  //Ternario --> condicion ? seMuestra : noSeMuestra USANDO EN LINEA 15

  const cambiarMostrar = ()=>{
    actualizarMostrar(!mostrarFormulario)
  }

  return (
    <div >
      <Header/>
      {mostrarFormulario=== true?<Formulario/> : <div /> }

      <MiOrg cambiarMostrar11={cambiarMostrar}/>
    </div>
  );
}

export default App;
