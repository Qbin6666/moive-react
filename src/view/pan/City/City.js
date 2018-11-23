import React, { Component } from 'react';
import { connect } from 'react-redux';
import CityUI from './CityUI';
import { CityAsync } from '../store/actionCreators'
import store from '../../../store/index';
class City extends Component {
  render() {
    return (
      <CityUI {...this.props}></CityUI>
    )
  }
  componentDidMount() {
    store.dispatch(CityAsync())

  }
}
//输入
const mapStateToProps = ({ List }) => {
  var LatelyCity=[]
  if (localStorage.getItem('hostryCity')){
    LatelyCity = JSON.parse(localStorage.getItem('hostryCity')).data
  }else {
    LatelyCity = []
  }
  return {
    LatelyCity,
    List,
    hotCity: [
      {
        id:1,
        name:'上海'
      },
      {
        id: 2,
        name: '北京'
      },
      {
        id: 3,
        name: '广州'
      },
      {
        id: 4,
        name: '深圳'
      },
      {
        id: 5,
        name: '武汉'
      },
      {
        id: 6,
        name: '天津'
      },
      {
        id: 7,
        name: '西安'
      },
      {
        id: 8,
        name: '南京'
      },
      {
        id: 9,
        name: '杭州'
      },
      {
        id: 10,
        name: '成都'
      },
      {
        id: 11,
        name: '重庆'
      }
    ]
  }
}
const mapDispatchToProps = (dispatch, ownprops) => {
  var arrCity = [];
  var obj ={}
  if (localStorage.getItem('hostryCity') ){
    arrCity = JSON.parse(localStorage.getItem('hostryCity')).data
  }else {
    arrCity = []
  }
  return {
    addCity: (city) => {
      for (var i = 0; i < arrCity.length; i++ ) {
        if(!(arrCity.indexOf(city) === -1)){
          arrCity.splice(arrCity.indexOf(city),1 )
        }
      }
      arrCity.unshift(city);
      if(arrCity.length>3){
        arrCity.splice(3)
      }
      obj.data = arrCity;
      var objCity = JSON.stringify(obj);
      localStorage.setItem('hostryCity', objCity);
      ownprops.history.replace('/')
    },
    Scroll: (val) => {
      document.documentElement.scrollTop = document.getElementById(val).offsetTop;
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(City)
