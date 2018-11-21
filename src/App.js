import React, { Fragment } from 'react';
import { HashRouter as Router, Route,NavLink } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import './styles/base.scss';
import HomeUI from '../src/view/pan/HomeUI';
import List from './view/pan/lists'
import Screen from './view/pan/Screen/Screen'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <HomeUI></HomeUI>
          <Route path='/' exact component={List} />
          <Route path='/screen' component={Screen} />
        </Fragment>
      </Router>
    </Provider>
  )
}

export default App;
