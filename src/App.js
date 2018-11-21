import React, { Fragment } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import './styles/base.scss';
import SelectCinema from './view/zhang/SelectCinema/SelectCinema';
import SelectSeat from './view/zhang/SelectSeat/SelectSeat';
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route path="/SelectCinema/341213" component={SelectCinema} />
          <Route path="/SelectSeat" component={SelectSeat} />
        </Fragment>
      </Router>
    </Provider>
  )
}

export default App;
