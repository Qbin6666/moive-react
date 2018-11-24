import React, { Component} from 'react';
import { connect } from 'react-redux';
import SelectSeatUI from './SelectSeatUI';

class SelectSeat extends Component {
  // constructor(props) {
  //   super(props);
  //   this.itemclose = this.itemclose.bind(this)
  // }
  render(){
    return(
      <SelectSeatUI {...this.props}></SelectSeatUI>
    )
  }
}
const mapStateToProps = ({ SelectSeat }) => {
  const data = [
    [
      {pai : 1,lie : 1},
      {pai : 1,lie : 2},
      {pai : 1,lie : 3},
      {pai : 1,lie : 4},
      {pai : 1,lie : 5},
      {pai : 1,lie : 6},
      {pai : 1,lie : 7},
      {pai : 1,lie : 8},
      {pai : 1,lie : 9},
      {pai : 1,lie : 10},
      {pai : 1,lie : 11},
      {pai : 1,lie : 12},
      {pai : 1,lie : 13},
      {pai : 1,lie : 14}
    ],
    [
      {pai : 2,lie : 1},
      {pai : 2,lie : 2},
      {pai : 2,lie : 3},
      {pai : 2,lie : 4},
      {pai : 2,lie : 5},
      {pai : 2,lie : 6},
      {pai : 2,lie : 7},
      {pai : 2,lie : 8},
      {pai : 2,lie : 9},
      {pai : 2,lie : 10},
      {pai : 2,lie : 11},
      {pai : 2,lie : 12},
      {pai : 2,lie : 13},
      {pai : 2,lie : 14}
    ],
    [
      {pai : 3,lie : 1},
      {pai : 3,lie : 2},
      {pai : 3,lie : 3},
      {pai : 3,lie : 4},
      {pai : 3,lie : 5},
      {pai : 3,lie : 6},
      {pai : 3,lie : 7},
      {pai : 3,lie : 8},
      {pai : 3,lie : 9},
      {pai : 3,lie : 10},
      {pai : 3,lie : 11},
      {pai : 3,lie : 12},
      {pai : 3,lie : 13},
      {pai : 3,lie : 14}
    ],
    [
      {pai : 4,lie : 1},
      {pai : 4,lie : 2},
      {pai : 4,lie : 3},
      {pai : 4,lie : 4},
      {pai : 4,lie : 5},
      {pai : 4,lie : 6},
      {pai : 4,lie : 7},
      {pai : 4,lie : 8},
      {pai : 4,lie : 9},
      {pai : 4,lie : 10},
      {pai : 4,lie : 11},
      {pai : 4,lie : 12},
      {pai : 4,lie : 13},
      {pai : 4,lie : 14}
    ],
    [
      {pai : 5,lie : 1},
      {pai : 5,lie : 2},
      {pai : 5,lie : 3},
      {pai : 5,lie : 4},
      {pai : 5,lie : 5},
      {pai : 5,lie : 6},
      {pai : 5,lie : 7},
      {pai : 5,lie : 8},
      {pai : 5,lie : 9},
      {pai : 5,lie : 10},
      {pai : 5,lie : 11},
      {pai : 5,lie : 12},
      {pai : 5,lie : 13},
      {pai : 5,lie : 14}
    ],
    [
      {pai : 6,lie : 1},
      {pai : 6,lie : 2},
      {pai : 6,lie : 3},
      {pai : 6,lie : 4},
      {pai : 6,lie : 5},
      {pai : 6,lie : 6},
      {pai : 6,lie : 7},
      {pai : 6,lie : 8},
      {pai : 6,lie : 9},
      {pai : 6,lie : 10},
      {pai : 6,lie : 11},
      {pai : 6,lie : 12},
      {pai : 6,lie : 13},
      {pai : 6,lie : 14}
    ],
    [
      {pai : 7,lie : 1},
      {pai : 7,lie : 2},
      {pai : 7,lie : 3},
      {pai : 7,lie : 4},
      {pai : 7,lie : 5},
      {pai : 7,lie : 6},
      {pai : 7,lie : 7},
      {pai : 7,lie : 8},
      {pai : 7,lie : 9},
      {pai : 7,lie : 10},
      {pai : 7,lie : 11},
      {pai : 7,lie : 12},
      {pai : 7,lie : 13},
      {pai : 7,lie : 14}
    ]
  ]
  return {
    data
  }
}

const mapDispatchToProps = (dispatch,ownprops) => {
  return {
    itemshow: (a,b)=>{
      //console.log(111)
      //this.refs.seatitem.style.display = 'none'
      var seatitem = document.getElementsByClassName('selected-block')[0];
      var seat = document.getElementsByClassName('seats-wrap')[a].children[b];
      seat.style.backgroundColor = 'green'
      var str=[];
      let tp=`
      <div class="selected-seat-item">
        <p class="selected-seat-info">${a+1}排${b+1}座</p>
        <p class="price-info">¥28</p>
        <span class="close"></span>
      </div>
      `
      str.push(tp);
      seatitem.innerHTML += str.join('');
    },
    // itemclose: ()=> {
    //   var seatitem1 = document.getElementsByClassName('selected-seat-item')[0];
    //   seatitem1.style.display = 'none'
    // }
    next: ()=>{
      console.log(ownprops)
      ownprops.history.replace('/order')
      localStorage.setItem('ordertime', '14:59')
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SelectSeat);
