import './App.css';
import { Route, Switch } from 'react-router-dom';

import Navbar from './Components/Navbar/index.js';
import LandingPage from './Components/LandingPage';

function App() {
  return (
    <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={LandingPage} />
          {/* <Route exact path="/checklist" component={Checklist} /> */}
          {/* <Route exact path="/map" component={Map} /> */}

        </Switch>
    </div>
  );
}

export default App;
