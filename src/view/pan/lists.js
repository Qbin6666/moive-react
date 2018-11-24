import { connect } from 'react-redux';
import ListUI from './listsUI';
import React, { Component } from 'react';
import { ListAsyac } from './store/actionCreators'
import store from '../../store/index'
class Home extends Component {
  constructor() {
    super();
    this.state = {
      timer: null
    };
    this.hand = this.hand.bind(this);
  }

  render() {
    return (
      <ListUI {...this.props}></ListUI>
    )
  }
  componentWillMount() {
    document.documentElement.scrollTop = 0;
  }
  componentDidMount () {
    window.addEventListener('scroll', this.hand)
    store.dispatch(ListAsyac())

  }
  hand() {
    clearTimeout(this.state.timer);
    let timer = setTimeout(() => {
      let t = this.props.page;
      localStorage.setItem('t',t)
      var scrollTop = window.scrollY;
      if (document.getElementById('main-ul')) {
        var scrollHeight = document.getElementById('main-ul').clientHeight + 50;
        var windowHeight = window.innerHeight
        if (scrollTop + windowHeight > scrollHeight) {
          console.log(scrollTop + windowHeight, scrollHeight)
          // window.removeEventListener('scroll', this.hand)
          if (localStorage.getItem('movieIds')) {
            var moiveId = JSON.parse(localStorage.getItem('movieIds'))
            var i = 12;
            var j = 23;
            var urlstr = (moiveId.slice(i + (t * 10), j + (t * 10) - 1)).join("%2C");
            if (urlstr) {
              store.dispatch(ListAsyac(urlstr))
              this.props.pageAdd()
            }else {
              if (t >= 5) {
                window.removeEventListener('scroll', this.hand)
                this.props.newPageAdd(t)
              }
            }
          }
        }
      }
    }, 300);

    this.setState({
      timer: timer
    })
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
    },

    newPageAdd: (t) => {
      dispatch ({
        type: 'NEWPAGEADD'
      })
    },
    scheigth: (sc) => {
      console.log(sc)
      dispatch({
        type: "SCHEIGTH",
        sc
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
