import React from 'react';
import HeaderAcudit from './header';
import MostrarAcudit from './mostraracudit';
import MostrarTemps from './mostrartemps';
import {Stylediv} from'../styled';

function ScreenAcudit() {
  
    return (
             <div>
               <MostrarTemps/>
               <Stylediv>
                   <HeaderAcudit></HeaderAcudit>
                   <MostrarAcudit></MostrarAcudit>
               </Stylediv>
            </div> 
   );
 }
 
 export default ScreenAcudit;
 