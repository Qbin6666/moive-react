import React, { Component } from  'react';
import { connect } from 'react-redux';
import OrderUI from './OrderUI';
import store from '../../../store/index';


class Order extends Component {
  // constructor() {
  //   super();

  // }
  render () {
    return (
      <OrderUI {...this.props}></OrderUI>
    )
  }
  componentWillMount() {
    if(!localStorage.getItem('ordertime') ) {
      this.props.history.push('/')
    }


    if(! localStorage.getItem('phone') ) {
      this.props.history.push('/')
      // console.log(phone)
    }

    if (localStorage.getItem('ordertime') === '00:00' ){
      this.props.orderUp(localStorage.getItem('ordertime'))
    }
  }
  componentDidMount() {
 
    if (localStorage.getItem('ordertime')) {
    var timer = setInterval(() => {
        var time = localStorage.getItem('ordertime').split(":")
        var m =parseInt(time[0])
        var s = parseInt(time[1])
      // console.log(m,s)
      if ( s <= 0 ) {
        if( m === 0 && s===0 ) {
          clearInterval(timer)
        }else{
          s=59
          m = m - 1;
          if (m < 0) {
            m = 0
          }
        }
      }else {
        s= s-1
      }
      m = m >= 10 ? m : "0" + m
      s = s >= 10 ? s : "0" + s
      var ordertime = m +":"+s
      this.props.orderUp(ordertime)
      // console.log(m,s)
      localStorage.setItem('ordertime', ordertime)
    }, 1000);
    }
  }
}

//输入
const mapStateToProps =({List}) => {
  if( localStorage.getItem('phone') ) {
    var phone = localStorage.getItem('phone')
    // console.log(phone)
  }
  return {
    List:List,
    ordertime: List.ordertime,
    phone:phone
  }
}

const mapDispatchToProps = (dispatch, ownprops) => {
  return {
    orderUp: (ordertime) => {
      // console.log(ordertime)
      dispatch ({
        type: 'ORDERTIME',
        ordertime: ordertime
      })

    },
    goblack: () => {
      console.log(ownprops.history.goBack)
      ownprops.history.goBack()
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Order)
