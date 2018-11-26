// 这个是 home ui 组件
import React , {Fragment} from 'react';
import './SelectSeat.scss';
import yanjing from './images/yanjing.png'
const SelectSeatUI = (props) => {
  return (
      <Fragment>
        <header>
          <h1>
            <span className="iconfont icon-fanhui-copy"></span>
            东海国际影城
          </h1>
        </header>
        <section>
          <div className='info-block'>
            <div className='movie-info'>
              <div className='movie-title'>毒液：致命守护者</div>
              <div className='movie-btn'>2018-11-22 10:20 英语3D</div>
            </div>
            <ul className='rem-list'>
              <li className='rem-item'>
                <img src={yanjing} alt=''/>
                <span>3D眼镜需自备或到影院购买</span>
              </li>
            </ul>
          </div>
          <div className='select-block'>
            <div className="hall-name-wrapper">
              <span className="hall-name">1号厅</span>
            </div>
            <div className="row-nav">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
            </div>
            <div className="seats-block">
            {
              props.data.map((item,index) => {
                return (
                  <div className = "seats-wrap" key={index}>
                  {
                    item.map((items,index1) => {
                      return (
                        <div className="wrap" key={index1} onClick={ () => {props.itemshow(index,index1)} }>
                          <div className="seat">
                            <div className="name">
                              <div>{items.pai}</div>
                              <div>{items.lie}</div>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                  </div>
                )
              })

            //   props.data.map((items,index) => {
            //     return (
            //       <div className="seats-wrap" key={index}>
            //     {
            //       items.d.map((item,k) => {
            //         return (
            //           <div className="wrap" key={k}>
            //           <div className="seat">
            //             <div className="name">
            //               <div>{item.pai}</div>
            //               <div>{item.lie}</div>
            //             </div>
            //           </div>
            //         </div>
            //         )
            //       })
            //     }
            //     </div>
            //     )
            //   })
            }
            </div>
          </div>
          <div className="buy-block">
            <div className="price-block">
              <div className="title-block">已选座位</div>
              <div className="selected-block">
                {/* <div className="selected-seat-item">
                  <p className="selected-seat-info">4排3座</p>
                  <p className="price-info">¥28</p>
                  <span className="close"></span>
                </div> */}
              </div>
            </div>
            <div className="submit-block">
                <div className="submit" onClick={props.next}>确认选座</div>
            </div>
          </div>
        </section>
      </Fragment>
  )
}

export default SelectSeatUI;
