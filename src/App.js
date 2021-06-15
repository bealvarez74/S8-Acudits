import React from 'react';
import ScreenAcudit from './componentes/screenacudit';
import ScreenWelcome from './componentes/welcome';


function App() {
   const screen=true;
   return (
            <div>
              {screen ? <ScreenWelcome/> :<ScreenAcudit/> }    
           </div> 
  );
}

export default App;
