import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Overview from '../src/Overview/Overview'
import OverviewProfile from './OverviewProfile/OverviewProfile';
import Cardpage from './cards/firstpage/Cardpage';
import Secondpage from './cards/secondpage/Secondpage'
import Thirdpage from './cards/thirdpage/Thirdpage';
import Fourthpage from './cards/Fourthpage/Fourthpage';
import Fifthpage from './cards/fifthpage/Fifthpage';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path = '/'>
          <Overview/>
        </Route>
        <Route exact path = '/Overview'>
          <Overview/>
        </Route>
        <Route exact path = '/OverviewProfile'>
          <OverviewProfile/>
        </Route>
        <Route exact path = '/Cardpage'>
         <Cardpage/>
        </Route>
        <Route exact path = '/Secondpage'>
         <Secondpage/>
        </Route>
        <Route exact path = '/Thirdpage'>
         <Thirdpage/>
        </Route>
        <Route exact path = '/Fourthpage'>
         <Fourthpage/>
        </Route>
        <Route exact path = '/Fifthpage'>
         <Fifthpage/>
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
