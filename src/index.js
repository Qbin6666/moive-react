
import ReactDOM from 'react-dom';
import App from './App';
import React, { Fragment } from 'react';
import { HashRouter as Router ,Route,Switch,Redirect} from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import './styles/base.scss';
import SelectCinema from './view/zhang/SelectCinema/SelectCinema';
import SelectSeat from './view/zhang/SelectSeat/SelectSeat';
import City from './view/pan/City/City'
import Order from './view/pan/Order/Order'
import Preview from './view/qiu/preview/preview.js';
import  Register from './view/qiu/register/register.js';
import  Login from './view/qiu/login/login.js';
import Show from './view/sun/show/Show';
ReactDOM.render(
<Provider store={store}>
<Router>
    <Fragment>
    <Switch>

          <Route path="/SelectCinema/:id" component={SelectCinema} />
          <Route path="/SelectSeat" component={SelectSeat} />
          <Route path='/city' component={City} />
          <Route path='/order' component={Order} />
          <Route path='/Preview/:id' component={Preview}/>
          <Route path='/register' component={Register}/>
          <Route path='/login' component={Login}/>
          <Route path='/show/:id' component={Show} />
          <Route path='/' component={App} />
          {/* <Redirect from='/' to='/home' ></Redirect> */}
    </Switch>
    </Fragment>
</Router>



















</Provider>
, document.getElementById('root'));
