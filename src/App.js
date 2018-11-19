import React, { Fragment } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import './styles/base.scss';

const App = () => {
  return (
    <Provider>
      <Router>
        <Fragment>
        <h1>lalalallalal</h1>        
        </Fragment>
      </Router>
    </Provider>
  )
}

export default App;
