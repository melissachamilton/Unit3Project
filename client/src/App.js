import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Locations from './components/landingPage/Locations';
import SingleLocal from './components/oneLocation/SingleLocal';
import LocationsForm from './components/landingPage/LocationsForm';

class App extends Component {
  render() {
    const singleLocalComponent = (props) => {
      return <SingleLocal {...props}/>
    }

    return (
      <Router>
        <Switch>
          <Route exact path='/'component={Locations} />
          <Route exact path='/locations'component={Locations} />
          <Route exact path = '/locations/newform'component={LocationsForm}/>
          <Route exact path='/locations/:localId'render={singleLocalComponent} />
        </Switch>
      </Router>
    );
  }
}

export default App;
