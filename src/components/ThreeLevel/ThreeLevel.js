import React, { Component, Fragment } from 'react';
import axios from 'axios';

import './threeLevel.scss'

class ThreeLevel extends Component {
  constructor(props){
    super(props);
    this.state = {
      list:[
         {
          info: '全城',
          name: 'allCity',
          active: false
        },
        {
          info: '品牌',
          name: 'brand',
          active: false
        },
        {
          info: '特色',
          name: 'feature',
          active: false
        }
      ],
      subwayFlag: false,
      district:[],
      brand:[],
      hallType:[],
      service:[],
      subway:[],
      timeRanges:[],
      businessInfo:[],
      subwayInfo:[]

    }
    this.changeActive = this.changeActive.bind(this);
    this.changeLiAcitve = this.changeLiAcitve.bind(this);
    this.businessColor = this.businessColor.bind(this);
    this.subwayColor = this.subwayColor.bind(this);
  }
  render(){
    return (
      <Fragment>
        <div className='threelevel'>
          <div className="listBox">
            <div className="list">
              {
                this.state.list.map((item, index) => {
                  return (
                    <div className={item.name} onClick={() => { this.changeActive(index) }} key={index}>{item.info}
                      <span className={item.active ? 'active angle' : 'angle'}></span>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className={this.state.list[0].active ? 'allCityList' : 'none'}>
            <ul>
              <li
                className={this.state.subwayFlag ? '' : 'li-active'}
                onClick={this.changeLiAcitve}
              >商区</li>
              <li
                className={this.state.subwayFlag ? 'li-active' : ''}
                onClick={this.changeLiAcitve}
              >地铁站</li>
            </ul>
            <div className={this.state.subwayFlag ? 'none' : 'businessList'}>
              <div className="businessNav">
                {
                  this.state.district.map((item,index) => {
                    return(
                      <div
                        className="item" key={index}
                        ref={index}
                        // className='bgColor'
                        onClick={() => {this.businessColor(index)}}
                      >{item.name}({item.count})</div>
                    )
                  })
                }
              </div>
              <div className="businessInfo">
              {
                this.state.businessInfo.map((item,index) => {
                  return (
                    <div key={index}><a href="#"><span>{item.name}</span><span className='count'>{item.count}</span></a></div>
                  )
                })
              }
              </div>
            </div>
            <div className={this.state.subwayFlag ? 'subwayList' : 'none'}>
              <div className="subwayNav">
              {
                  this.state.subway.map((item,index) => {
                    return(
                      <div
                      className="item"
                      key={index}
                      ref={item.name}
                        onClick={() => { this.subwayColor(item.name, item.subItems) }}>{item.name}({item.count})</div>
                    )
                  })
              }
              </div>
              <div className="subwayInfo">
                {
                  this.state.subwayInfo.map((item, index) => {
                    return (
                      <div key={index}><a href="#"><span>{item.name}</span><span className='count'>{item.count}</span></a></div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
  changeActive(index) {
    // console.log(this.state.list[index].active)
    var newState = {...this.state};
    for (var i = 0; i < newState.list.length ; i++){
        if(index === i){
          newState.list[index].active = !newState.list[index].active
        }else{
          newState.list[i].active = false;
        }
    }
    this.setState(newState);
    // this.setLevel();
  }
  changeLiAcitve() {
    var newState = { ...this.state };
    newState.subwayFlag = !newState.subwayFlag;
    this.setState(newState);
  }
  businessColor(index) {
    for(var i in this.refs){
      if(i == index){
        this.refs[index].style.background = '#F5F5F5';
        this.refs[index].style.color = '#f03d37';
        if (this.state.district[i].subItems){
          console.log(this.state.district[i].subItems)
          // console.log(1);
          let newState = {...this.state};
          newState.businessInfo = this.state.district[i].subItems;
          this.setState(newState);
        }else{
          let newState = { ...this.state };
          newState.businessInfo = [];
          this.setState(newState);
        }
      }else{
        this.refs[i].style.background = '#fff';
        this.refs[i].style.color = '#7F7F7F';
      }
    }
  }
  subwayColor(data,info){
    for(let i in this.refs){
      this.refs[i].style.background = '#fff';
      this.refs[i].style.color = '#7F7F7F';
    }
    this.refs[data].style.background = '#F5F5F5';
    this.refs[data].style.color = '#f03d37';
    if (info){
      let newState = {...this.state};
      newState.subwayInfo = info;
      this.setState(newState);
    }else{
      let newState = { ...this.state };
      newState.subwayInfo = [];
      this.setState(newState);
    }
  }
  setLevel() {
    var agency_port = 'https://bird.ioliu.cn/v1/?url=';
    var url = 'http://m.maoyan.com/ajax/filterCinemas';
    axios.get(agency_port+url,{
      params: {
        ci:'30'
      }
    })
    .then(res => {
      if(res.status === 200){
        console.log(res.data);
        var newState = {...this.state};
        newState.district = res.data.district.subItems;
        newState.brand = res.data.brand.subItems;
        newState.hallType = res.data.hallType.subItems;
        newState.service = res.data.service.subItems;
        newState.subway = res.data.subway.subItems;
        newState.timeRanges = res.data.timeRanges.subItems;
        this.setState(newState);
        // console.log(this.state);
      }
    })
  }
  componentDidMount() {
    this.setLevel();
    // this.bgColor(0)
  }
}
export default ThreeLevel
