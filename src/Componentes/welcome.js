import React from 'react';
import {Stylewelcome, Stylebutton} from'../styled';
import { Link } from 'react-router-dom';

function ScreenWelcome() {
    
    return (
            <div>   
               <Stylewelcome><h1>Welcome!!</h1>
                  <Stylebutton><Link to ="/screenacudit">Accedeix</Link></Stylebutton> 
               </Stylewelcome>
            </div>  
         );
 }
 
 export default ScreenWelcome;