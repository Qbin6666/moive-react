import React, { Fragment } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import store from './store/index';
import { Provider } from 'react-redux';


import './styles/base.scss';


import Cinema from './view/sun/cinema/Cinema'

const App = () => {
  // console.log(store)
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
        {/* <h1>lalalallalal</h1> */}
        <Route path='/cinema' component={Cinema}></Route>
        </Fragment>
      </Router>
   </Provider>
  )
}

export default App;
