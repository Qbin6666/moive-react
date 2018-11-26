import { connect } from 'react-redux';
import ScreenUI from './ScreenUI';
import React, { Component } from 'react';
import store from '../../../store/index';
import { screenAsyac, screenListAsyac } from '../store/actionCreators'

class Screen extends Component {
  constructor() {
    super();
    this.state = {
      timer: null
    };
    this.handList = this.handList.bind(this);
  }
  render() {
    return(
      <ScreenUI {...this.props}></ScreenUI>
    )
  }
  componentWillMount() {
    document.documentElement.scrollTop = 0;
  }
  componentDidMount() {
    store.dispatch( screenAsyac() )
    store.dispatch( screenListAsyac() )
      window.addEventListener('scroll', this.handList)
  }
  handList() {
    clearTimeout(this.state.timer);
    var timer = setTimeout(() => {
      console.log('screen');
      if (document.getElementsByClassName('cat-home')[0] && document.getElementsByClassName('list-title')[0]
        && document.getElementsByClassName('line')[0]) {
        var cathomeHeigth = document.getElementsByClassName('cat-home')[0].clientHeight
        var listtitleHeigth = document.getElementsByClassName('list-title')[0].clientHeight
        var line = document.getElementsByClassName('line')[0].clientHeight
        var topHeigth = cathomeHeigth + listtitleHeigth + line
        let t = this.props.pageList;
        var scrollTop = window.scrollY;
        var scrollHeight = document.getElementById('list-ul').clientHeight + topHeigth;
        var windowHeight = window.innerHeight
        console.log(scrollTop + windowHeight, scrollHeight )
        if (scrollTop + windowHeight > scrollHeight) {
          // window.removeEventListener('scroll', this.handList)
          // if (localStorage.getItem('newmovieIds')) {

            var moiveId = JSON.parse(localStorage.getItem('newmovieIds'))
            var i = 12;
            var j = 23;
            var urlstr = (moiveId.slice(i + (t * 10), j + (t * 10) - 1)).join("%2C");
            if (urlstr) {
              store.dispatch(screenListAsyac(urlstr))
              this.props.pageAddList()
            }
          // }
        }
      }
    }, 300);

    this.setState({
      timer: timer
    })

  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handList)
    clearTimeout(this.props.timer);
  }
}


const mapStateToProps = ({List}) => {
  return {
    List,
    pageList: List.pageList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    pageAddList: () => {
      dispatch ({
        type: 'PAGEADDLIST'
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Screen);
