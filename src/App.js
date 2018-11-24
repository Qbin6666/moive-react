import React, { Fragment } from 'react';
import { HashRouter as Router ,Route} from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import './styles/base.scss';
import Preview from './view/qiu/preview/preview.js';
import  Register from './view/qiu/register/register.js';
import  Login from './view/qiu/login/login.js';
import Mytype from './view/qiu/mytype/mytype.js';
import Header from "./components/Header";
import Footer from './components/Footer';
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
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
