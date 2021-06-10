import React from 'react';
import HeaderAcudit from './Componentes/header';
import MostrarAcudit from './Componentes/mostraracudit';
import {Stylediv} from'./styled';

function App() {
  return (   
      <Stylediv>
          <HeaderAcudit></HeaderAcudit>
          <MostrarAcudit></MostrarAcudit>      
      </Stylediv>
  );
}

export default App;
