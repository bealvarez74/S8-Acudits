import React from 'react';
import {Styletemps} from '../styled';

const MostrarTemps= _ =>{
    let temps;
        fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=631107e5bcde94fabf440b71a6701d6b'          
        )
            .then(response => response.json())
            .then(temps => {console.log(temps.name)})
    return (
        <Styletemps>
            {temps}
        </Styletemps>
   )    
};

export default MostrarTemps;