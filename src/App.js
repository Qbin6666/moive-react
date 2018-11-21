import React, { Fragment } from 'react';
import { HashRouter as Router, Route,NavLink } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';


import './styles/base.scss';
import SelectCinema from './view/zhang/SelectCinema/SelectCinema';
import SelectSeat from './view/zhang/SelectSeat/SelectSeat';
// import HomeUI from '../src/view/pan/HomeUI';
import List from './view/pan/lists'
import Screen from './view/pan/Screen/Screen'


import Cinema from './view/sun/cinema/Cinema'
import ThreeLevel from './components/ThreeLevel/ThreeLevel'

const App = () => {
  // console.log(store)
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route path="/SelectCinema/:id" component={SelectCinema} />
          <Route path="/SelectSeat" component={SelectSeat} />
          {/* <h1>lalalallalal</h1> */}
          {/* <HomeUI></HomeUI> */}
          {/* <ThreeLevel></ThreeLevel> */}
          <Route path='/cinema' component={Cinema}></Route>
          <Route path='/' exact component={List} />
          <Route path='/screen' component={Screen} />
        </Fragment>
      </Router>
   </Provider>
  )
}

export default App;
