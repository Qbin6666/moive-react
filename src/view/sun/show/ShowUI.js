import React,{Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import './show.scss';
const ShowUI = (props) => {
  // console.log(props.showItem(0))
  var shows = props.showTime.shows || [];
  return (
    <Fragment>
      <div className="sheader">
        <span className="iconfont icon-fanhui-copy" onClick={props.fan}></span>
        <span>{props.cinemaData.nm}</span>
      </div>
      <div className='showInfo'>
        <div className="infosite">
          <h2>{props.cinemaData.nm}</h2>
          <p>{props.cinemaData.addr}</p>
        </div>
        <div className='icon'>
          1
          </div>
      </div>
      <div className="infoImgs">
        <div className="infoImgs-top">
          <ul id='moveUl'>
            {
              props.ShowList.map((item,index) => {
                return (
                  <li key={index} name='showItem' onClick={() => { props.showItem(index,item.img)}}>
                    <img src={item.img} width='100%' height='100%' />
                    <span></span>
                  </li>
                )
              })
            }
          </ul>
          <div className="cloth"></div>
        </div>
        <div className="movieInfo">
            <h2>{props.showTime.nm}</h2>
            <p>{props.showTime.desc}</p>
        </div>
      </div>
      <div className='session'>
        <div className="session-nav">
          {
            shows.map((item, index) => {
              return (
                <div key={index}  className='dateShow' onClick={()=>{props.setPlist(item.plist,index)}}><span>{item.dateShow}</span></div>
              )
            })
          }
        </div>
        <div className="seesion-items">
          {
            props.plist.map((item,index) => {
              return(
                <div className='plist' key={index}>
                  <div className="box-flex">
                    <div className="time-block">
                      <div className="begin">{item.tm}</div>
                      <div className="end">{item.tm}<span className="tui">散场</span></div>
                    </div>
                    <div className="info-block">
                      <div className="lan">{item.lang} {item.tp}</div>
                      <div className="hall">{item.th}</div>
                    </div>
                    <div className="price">
                      <div className="sellPr">
                        <span className="d">¥</span>
                        <span>
                          <span className="stonefont">{Math.ceil(item.vipPrice / 0.75)}</span>
                        </span>
                      </div>
                      <div className="vipPrice">
                        <span className="icon">折扣卡</span>
                        <span className="num">¥{item.vipPrice}</span>
                      </div>
                      <div className="extraDesc">{item.extraDesc}</div>
                    </div>
                    <div className="button-block">
                      <div className="button">购票</div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </Fragment>
  )
}
export default ShowUI;
