import './screen.scss'
import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import HomeUI from '../HomeUI'
import Max from "../image/MAX.png"
import Max3d from '../image/3d.png';
const Screen = (props) => {
//   console.log(props.List.ScreenListM
// )
  return (
    <Fragment>
      <HomeUI></HomeUI>
      <div className='list-title'>
        <p className='list-p'>近期最受期待</p>
        <div className='list-box'>
          {
            props.List.ScreenList.map((item, index) => {
              return (
                <NavLink to={`/${item.id}`} className='most-expected' key={index}>
                  <div className='most-img'>
                    <img src={item.img} alt='' />
                    <span className='most-bg'></span>
                    <p className='most-num'>{item.wish}人想看</p>
                    <div className='toggle-wish'>
                      <span></span>
                    </div>
                  </div>
                  <p className='nameM'>{item.nm}</p>
                  <p className='timeM'>{item.comingTitle}</p>
                </NavLink>
              )
            })
          }
        </div>
      </div>
      <div className="line"></div>
      <ul className="main-block" id="list-ul">
        {
          props.List.ScreenListM.map((item, index) => {
            return (
              <li key={index}>
                <span className='main-block-date'>{item.comingTitle}</span>
                <NavLink to={`/?movie=${item.id}`}>
                  <div className="main-block-img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="z-content">
                    <div className="z-content-left">
                      <div className="first-p">
                        <p>{item.nm}</p>
                        <span><img src={item.version === 'v3d' ? Max3d : Max}
                          alt=""
                          className={item.version ? "" : 'hideM'}
                        /></span>
                      </div>
                      <div className="last-p">
                        <p><span className="textColor">{item.wish}</span>人想看</p>
                        <p>主演:{item.star} </p>
                        <p>{item.rt}上映</p>
                      </div>
                    </div>
                    <div className={item.showst === 1 ? 'buyBgL' : 'buyBgF'}>
                      {item.showst === 1 ? '想看' : '预售'}
                    </div>
                  </div>
                </NavLink>
              </li>
            )
          })
        }
        <li className="addList">加载更多...</li>
      </ul>
    </Fragment>
  )
}
export default Screen;
