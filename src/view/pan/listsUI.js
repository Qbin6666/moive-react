import React ,{Fragment}from 'react';
import { NavLink } from 'react-router-dom';
import HomeUI from './HomeUI';
import './lists.scss';
import Max from './image/MAX.png';
import Max3d from './image/3d.png';
const Lists = (props) => {
  // console.log(props)
  return (

    <Fragment>
      <HomeUI></HomeUI>
      <ul className="main-block">
        {
          props.List.movieList.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={`/SelectCinema/${item.id}`}>
                  <div className="main-block-img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="z-content">
                    <div className="z-content-left">
                      <div className="first-p">
                        <p>{item.nm}</p>
                        <span><img src={item.version === 'v3d' ? Max3d : Max} alt=""
                          className={item.version ? "" : "hide"}
                        /></span>
                      </div>
                      <div className="last-p">
                        <p><span>观众评</span><span className="color">{item.sc}</span></p>
                        <p>主演: {item.star}</p>
                        <p>{item.showInfo}</p>
                      </div>
                    </div>
                    <div className={item
                      .globalReleased ? "z-content-right" : "activeOptiong"}> {item
                        .globalReleased ? "购买" : "预售"} </div>
                  </div>
                </NavLink>
              </li>
            )
          })
        }
        <li className="addList" onClick={() => {
          props.addClickLisk(props.List.movieIds)
        }}>加载更多...</li>
      </ul>
    </Fragment>
  )
}
export default Lists;
