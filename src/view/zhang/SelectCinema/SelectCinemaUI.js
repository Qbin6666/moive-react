// 这个是 home ui 组件
import React , {Fragment} from 'react';
import './SelectCinema.scss';
import return1 from './images/return.png';
// import duye from './images/duye.jpg';
import imax from './images/3dimax.png';

const SelectCinemaUI = (props) => {
  return (
    <Fragment>
        <header>

          <h1>
            <span className="iconfont icon-fanhui-copy"></span>
            {props.movie.nm}
          </h1>
        </header>
        <div className='detail'>
          <img src={props.movie.img} alt=''/>
          <div className='content'>
            <h1>{props.movie.nm}</h1>
            <p>Venom</p>
            <p className='pingfen'>{props.movie.sc}  <span>(65.8万人评)</span></p>
            <p>动作,惊悚,科幻<img src={imax} alt=''/></p>
            <p>{props.movie.star}</p>
            <p>{props.movie.rt}大陆上映</p>
          </div>
          <div className='arrow-g'>
            <img src={return1} alt=''/>
          </div>
        </div>
        <div className='showdays'>
          <ul>
            <li>今天11月20日</li>
            <li>今天11月20日</li>
            <li>今天11月20日</li>
            <li>今天11月20日</li>
            <li>今天11月20日</li>
            <li>今天11月20日</li>
            <li>今天11月20日</li>
          </ul>
        </div>
        <div className='nav-warp'>
          <div className='item'>全城<span></span></div>
          <div className='item'>品牌<span></span></div>
          <div className='item'>特色<span></span></div>
        </div>
        {
        props.list.map((item,index) => (
        <div className='list-warp'>
          <div className='list-item'>
            <div className='title'>
              <div className='title-top'>
                <span>{item.nm}</span>
                <span className='price-block'>
                  <span className='price'>{item.sellPrice}</span>
                  <span className='q'>元起</span>
                </span>
              </div>
              <div className='title-mid'>
                <div className='local'>{item.addr}</div>
                <div className='distance'>{item.distance}</div>
              </div>
              <div className='title-btn'>
                <div className={item.tag.allowRefund===1 ? "allowRefund":"n"}>退</div>
                <div className={item.tag.endorse===1 ? "allowRefund":"n"}>改签</div>
                <div className={item.tag.snack===1 ? "snack":"n"}>小吃</div>
                <div className={item.tag.vipTag===1 ? "vipTag":"n"}>折扣卡</div>
                <div className="allowRefund">CGS中国巨幕厅</div>
                <div className="allowRefund">杜比全景声厅</div>
              </div>
            </div>
            <div className='buttom'>
              <span>近期场次 :</span>
              <span>15:20 </span>
              <span>16:00 </span>
              <span>18:00 </span>
            </div>
          </div>
        </div>
        ))
      }
    </Fragment>
  )
}

export default SelectCinemaUI;
