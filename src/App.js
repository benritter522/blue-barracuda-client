import './App.css';
import { Route, Switch } from 'react-router-dom';

import Navbar from './Components/Navbar/index.js';
import WarningTicker from './Components/WarningTicker';
import LandingPage from './Components/LandingPage';
import Checklist from './Components/Checklist';
import EvacuationZones from './Components/EvacuationZones';
import Alerts from './Components/Alerts';

function App() {
  return (
    <div className="App">
        <Navbar />
        <WarningTicker />

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/checklist" component={Checklist} />
          {/* <Route path="/map" component={Map} /> */}
          <Route path="/evacuation-zones" component={EvacuationZones} />
          <Route path="/alerts" component={Alerts} />

        </Switch>
    </div>
  );
}

export default App;
