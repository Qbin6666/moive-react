import React ,{Fragment}from 'react';
import { NavLink } from 'react-router-dom';
import './lists.scss';
import HomrUI from './HomeUI'
import Max from './image/MAX.png';
import Max3d from './image/3d.png';
const Lists = (props) => {
  // console.log(props.List.movieList)
  return (
    <Fragment>
      <HomrUI></HomrUI>
      <ul className="main-block" id="main-ul">
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
                        <p className={item.globalReleased === false ? "hide" : ""}>
                          <span>{item.sc === 0 ? "暂无评分" : '观众评'}</span>
                          <span className={ item.sc === 0 ? "hide":"color"}>
                            {String(item.sc).length === 1 ? item.sc + "." + 0 : item.sc }
                          </span>
                        </p>
                        <p className={item.globalReleased === true ? "hide" : ""}>
                          <span className="color">{item.wish}</span>
                          <span>人想看</span>
                        </p>
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
        <li className="addList"
        id="add"
         >加载更多...</li>
      </ul>
      <div id="scrollHide"></div>
    </Fragment>
  )
}
export default Lists;
