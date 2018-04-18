import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './global-styles';

import Main from './pages/Main.jsx';
import Map from './pages/Map.jsx';
import New from './pages/New.jsx';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Main} />
          <Route path="/map" component={Map} />
          <Route path="/new" component={New} />
        </div>
      </Router>
    );
  }
}

//Mount app
const root = document.querySelector('#root');

ReactDOM.render(<App />, root);

if (module.hot) {
  module.hot.accept();
}
