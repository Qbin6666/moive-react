import React,{ Fragment } from 'react';
import './cinema.scss';
import sale from './images/sale.png'
import ThreeLevel from '../../../components/ThreeLevel/ThreeLevel'

const CinemaUI = (props) => {
  // props.cityCinema.cinemas
  console.log(props);
  return (
    <Fragment>
      <ThreeLevel></ThreeLevel>
      <div className='cinema'>
        <ul>
          {
            props.cityCinema.map((item, index) => {
              return (
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
        </ul>
      </div>
    </Fragment>
  )
}
export default CinemaUI;
