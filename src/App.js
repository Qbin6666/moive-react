import React, { Fragment } from 'react';
import { HashRouter as Router ,Route} from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';


import './styles/base.scss';
import SelectCinema from './view/zhang/SelectCinema/SelectCinema';
import SelectSeat from './view/zhang/SelectSeat/SelectSeat';
// import HomeUI from '../src/view/pan/HomeUI';
import List from './view/pan/lists'
import Screen from './view/pan/Screen/Screen'
import Cinema from './view/sun/cinema/Cinema'
// import ThreeLevel from './components/ThreeLevel/ThreeLevel'
import City from './view/pan/City/City'
import Order from './view/pan/Order/Order'

import Preview from './view/qiu/preview/preview.js';
import  Register from './view/qiu/register/register.js';
import  Login from './view/qiu/login/login.js';
import Mytype from './view/qiu/mytype/mytype.js';
import Header from "./components/Header";
import Footer from './components/Footer';
const App = () => {
  // console.log(store)
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route path="/SelectCinema/:id" component={SelectCinema} />
          <Route path="/SelectSeat" component={SelectSeat} />
          {/* <h1>lalalallalal</h1> */}
          {/* <ThreeLevel></ThreeLevel> */}
          <Route path='/cinema' component={Cinema}></Route>
          {/* <HomeUI></HomeUI> */}
          <Route path='/' exact component={List} />
          <Route path='/screen' component={Screen} />
          <Route path='/city' component={City} />
          <Route path='/order' component={Order} />
          {/* <Header/>
           
          <Footer/> */}
          <Route path='/Preview/:id' component={Preview}/>
          <Route path='/register' component={Register}/>
          <Route path='/login' component={Login}/>
          <Route path='/mytype' component={Mytype}/>
        </Fragment>
      </Router>
   </Provider>
  )
}

export default App;
