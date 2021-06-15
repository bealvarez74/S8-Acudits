import React, {useState} from 'react';
import ScreenAcudit from './screenacudit';
import {Stylewelcome, Stylebutton} from'../styled';

function ScreenWelcome() {
    const[screenWelcome,setScreenWelcome ]=useState(true);
    return (
            <div>
                {screenWelcome?
               <Stylewelcome><h1>Welcome!!</h1>
               <Stylebutton onClick={()=>setScreenWelcome(false)}>Accedeix</Stylebutton> 
               </Stylewelcome>:<ScreenAcudit/>}
            </div>  
         );
 }
 
 export default ScreenWelcome;