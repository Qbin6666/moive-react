import React,{ Fragment } from 'react';
import './cinema.scss';
import sale from './images/sale.png'

const CinemaUI = (props) => {
  // props.cityCinema.cinemas
  console.log(props.cityCinema);
  return (
    <Fragment>
      <div className='cinema'>
        <ul>
          {
            props.cityCinema.map((item,index) => {
              return(
                <li className='cinema-item' key={index}>
                  <a href="#">
                    <h2>{item.nm} <i>{item.sellPrice}</i><span>元起</span></h2>
                    <div className='site'><p className='siteP'>{item.addr}</p> <span>{item.distance}</span></div>
                    <div className='label-block'>
                      <div className={item.tag.allowRefund ? 'allowRefund' : 'none'}>退</div>
                      <div className={item.tag.endorse ? 'endorse' : 'none'}>改签</div>
                      <div className={item.tag.snack ? 'snack' : 'none'}>小吃</div>
                      <div className={item.tag.vipTag ? 'vipTag' : 'none'}>折扣卡</div>
                      <div className='hallType'>CGS中国巨幕厅</div>
                      <div className='hallType'>杜比全景声厅</div>
                    </div>
                    <p className={item.promotion.cardPromotionTag ? 'sale' : 'none'}>
                    <img src={sale} alt="" />{item.promotion.cardPromotionTag}</p>
                  </a>
                </li>
              )
            })
          }

          <li className='cinema-item move' onClick={props.moveCinema}>加载更多</li>
          {/* <li className='cinema-item'>
            <a href="#">
              <h2>太平洋影城(深圳同泰时代广场店) <i>34.9</i><span>元起</span></h2>
              <p className='site'>宝安区福永街道同泰时代广场4层 <span>800m</span></p>
              <div className='label-block'>
                <div className='allowRefund'>退</div>
                <div className='endorse'>改签</div>
                <div className='snack'>小吃</div>
                <div className='vipTag'>折扣卡</div>
                <div className='hallType'>CGS中国巨幕厅</div>
                <div className='hallType'>杜比全景声厅</div>
              </div>
              <p className="sale"> <img src={sale} alt="" />开卡特惠,首单2张立减10元</p>
            </a>
          </li>
          <li className='cinema-item'>
            <a href="#">
              <h2>太平洋影城(深圳同泰时代广场店) <i>34.9</i><span>元起</span></h2>
              <p className='site'>宝安区福永街道同泰时代广场4层 <span>800m</span></p>
              <div className='label-block'>
                <div className='allowRefund'>退</div>
                <div className='endorse'>改签</div>
                <div className='snack'>小吃</div>
                <div className='vipTag'>折扣卡</div>
                <div className='hallType'>CGS中国巨幕厅</div>
                <div className='hallType'>杜比全景声厅</div>
              </div>
            </a>
          </li> */}
        </ul>
      </div>
    </Fragment>
  )
}
export default CinemaUI;
