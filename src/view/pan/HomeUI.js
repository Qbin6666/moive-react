import './home.scss';
import React, { Fragment } from 'react';
import search from './image/search.png';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
const HomeUI = (props) => {
  return (
    <Fragment>
    <div className='cat-home'>
      {/* <div className='header'>猫眼电影</div> */}
      <div className='z-top'>
        <p>深圳</p>
        <ul>
            <li><NavLink exact to='/'>正在热映</NavLink> </li>
            <li><NavLink  to='/screen'>即将上映</NavLink></li>
        </ul>
        <p className="p-img"><img src={search} alt=""/></p>
      </div>
    </div>
    </Fragment>
  )
}
export default HomeUI;
