import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './components/Main.jsx';


class App extends Component {
  render() {
    return (
      <Router>
          <Route exact path="/" component={Main} />
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
