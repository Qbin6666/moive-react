import React from 'react';
import { Link } from 'react-router-dom';
import './order.scss';

const OrderUI = (props) => {
  console.log(props.phone)
  return (
    <div className="order">
      <div className="navbar">
        <div className="navbar-left">
          <div className="navbar-left-a" onClick={props.goblack}></div>
        </div >
        <div className="navbar-rigth">
          <p>支付订单</p>
        </div>
      </div>
      <div className='time'>
        支付剩余时间:  <span>{props.ordertime}</span>
      </div>
      <div className="movie-info">
        <div className='middle'>
          <div className="title" >名侦探柯南：零的执行人</div>
          <div className="flex"></div>
          <div className="logo"></div>
        </div>
        <div className="date">今天11月23日 16:45 (日语2D)</div>
        <div className="local">星美国际影商城(黄龙店) </div>
        <div className="seats">
          <div className='seats-l'>16号厅</div>
          <div className="seat">5排5座</div>
        </div>
      </div>
      <div className='movie-line'></div>
      <div className='pay-info'>
        <div className='discount'><span>活动与低佣卷</span><span>无可用</span></div>
        <div className='discount'><span>手机号码</span><span>{ props.phone ? props.phone:'' }</span></div>
        <div className='discount' id='last-dis'>
        <span>小计</span>
        <span>
          <span>￥</span>
          <span className='paymoney'>27.9</span>
        </span>
        </div>
      </div>
      <div className='footer'>
        <div className='footer-flex'>
          <div className='footer-paony'>
            <div className='footer-color'>退改签须知</div>
            <div>
              <span>应付</span>
              <span className='modal'>￥</span>
              <span className='modal modal-f'>27.9</span>
            </div>
          </div>
          <div className='footer-btn'>确认支付</div>
        </div>
      </div>
      <div className={props.ordertime === "00:00" ? 'flexs hide' : "flexs"}>
        <div className='flex-div' >
            <p className="flex-p">支付超时,该订单已经失效</p>
            <p className='flex-p-last'>请重新购买</p>
          <div className='end'>知道了</div>
        </div>
      </div>
    </div>
  )
}
export default OrderUI;
