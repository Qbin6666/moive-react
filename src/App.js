import React, { Fragment } from 'react';
import { HashRouter as Router ,Route,Switch,Redirect} from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';


import './styles/base.scss';
import SelectCinema from './view/zhang/SelectCinema/SelectCinema';
import SelectSeat from './view/zhang/SelectSeat/SelectSeat';
// import HomeUI from '../src/view/pan/HomeUI';
import List from './view/pan/lists'
import Screen from './view/pan/Screen/Screen'
import Cinema from './view/sun/cinema/Cinema'
import Mytype from './view/qiu/mytype/mytype.js';
import Header from './components/Header/index'
import Footer from './components/Footer/index';
const App = () => {
  // console.log(store)
  return (
    <Fragment>
        <Header/>
        <Switch>
          <Route path='/home' component={List} />
          <Route path='/screen' component={Screen} />
          <Route path='/cinema' component={Cinema}></Route>
          <Route path='/mytype' component={Mytype}/>
          <Redirect from="/" to="/home"></Redirect>
        </Switch>
      <Footer/> 
    </Fragment>
  )
}

export default App;
