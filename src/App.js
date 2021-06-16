import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import ScreenAcudit from './componentes/screenacudit';
import ScreenWelcome from './componentes/welcome';


function App() {
   
   return (<Router>
            <div>
              <Switch>
                <Route path="/welcome"><ScreenWelcome/></Route>
                <Route path="/screenacudit"><ScreenAcudit/></Route>
                <Route path="/"><ScreenWelcome/></Route>
              </Switch>    
           </div>
           </Router>
  );
}

export default App;
