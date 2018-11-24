import './home.scss';
import React, { Fragment, Component } from 'react';
import search from './image/search.png';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';

class HomeUI extends Component {
  constructor(props) {
    super(props)
    this.state = {
      city:''
    }
  }
  render() {
    return (
      <Fragment>
        <div className='cat-home'>
          {/* <div className='header'>猫眼电影</div> */}
          <div className='z-top'>
            <div>
              <NavLink to='/city'><p>{this.state.city}</p></NavLink>
              <span></span>
            </div>
            <ul>
              <li><NavLink exact to='/'>正在热映</NavLink> </li>
              <li><NavLink to='/screen'>即将上映</NavLink></li>
            </ul>
            <p className="p-img"><img src={search} alt="" /></p>
          </div>
        </div>
      </Fragment>
    )
  }
  componentDidMount() {
    if (!localStorage.getItem('hostryCity') ) {
        let newCity = '深圳'
        this.setState ({
          city: newCity
        })
    }else {
      let newCity = JSON.parse(localStorage.getItem('hostryCity')).data[0]
      this.setState ({
        city: newCity
      })
    }

  }

}
export default HomeUI;
