import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import landing_routes from './routes/landing-routes';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  } 




  render() {
    return (
      <HashRouter>
        <div>
          {landing_routes}
        </div>
      </HashRouter>
    ) 
  }
}

export default App;
