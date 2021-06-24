import './App.css';
import { Route, Switch } from 'react-router-dom';

import Navbar from './Components/Navbar/index.js';
import LandingPage from './Components/LandingPage';
import Checklist from './Components/Checklist';
import EvacuationZones from './Components/EvacuationZones';

function App() {
  return (
    <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/checklist" component={Checklist} />
          {/* <Route exact path="/map" component={Map} /> */}
          <Route path="/evacuation-zones" component={EvacuationZones} />
        </Switch>
    </div>
  );
}

export default App;
