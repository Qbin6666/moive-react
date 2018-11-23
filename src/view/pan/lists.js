import { connect } from 'react-redux';
import ListUI from './listsUI';
import React, { Component } from 'react';
import { ListAsyac } from './store/actionCreators'
import store from '../../store/index'
class Home extends Component {
  constructor() {
    super();

    this.hand = this.hand.bind(this);
  }

  render() {
    return (
      <ListUI {...this.props}></ListUI>
    )
  }
  componentDidMount () {
    store.dispatch(ListAsyac())
    localStorage.removeItem('more')
    window.addEventListener('scroll',this.hand)
  }
  hand() {
    let t = this.props.page;
    var scrollTop = window.scrollY;
    var scrollHeight = document.getElementById('main-ul').clientHeight + 50;
    var windowHeight = window.innerHeight
    if (scrollTop + windowHeight > scrollHeight ) {
      var moiveId = JSON.parse(localStorage.getItem('movieIds'))
      var i = 12;
      var j =23;
      var urlstr = (moiveId.slice(i + (t * 10), j + (t * 10) - 1)).join("%2C");
      if (urlstr){
        let lastid = moiveId.slice(i + (t * 10), j + (t * 10) - 1)
        if (lastid[lastid.length - 1] === moiveId[moiveId.length - 1] ) {
          localStorage.setItem('more',0)
        }else {
          localStorage.removeItem('more')
        }
        setTimeout(() => {
        // console.log('开始加')
          store.dispatch(ListAsyac(urlstr))
          this.props.pageAdd()
        }, 1500);
      }
    }
  }
  componentWillUnmount () {
    window.removeEventListener('scroll', this.hand)
  }
}
//输入
const mapStateToProps = ({List}) => {
  localStorage.getItem('more')
  return {
    List: List,
    page: List.page
  }
}
//输出
const mapDispatchToProps = (dispatch) =>{
  return {
    pageAdd: () => {
      dispatch({
        type: 'PAGEADD'
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
