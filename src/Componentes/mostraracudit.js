import React, {useState} from 'react';
import {Stylebutton} from '../styled';

const MostrarAcudit= _ =>{

    const [joke, setJoke] = useState(null);
    const nouAcudit = () => {
        fetch('https://icanhazdadjoke.com/',{
            headers : { 
                'Accept': 'application/json' // com JSON    
               }                   
        })
            .then(response => response.json())
            .then(res =>{ console.log(res)
              setJoke(res.joke);
            })         
    }
    
    return (
    <div>
       {joke}  
       <Stylebutton onClick={() => nouAcudit()}>Següent Acudit</Stylebutton> 
    </div>
   ) 
    
};

export default MostrarAcudit;
