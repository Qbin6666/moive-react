import { connect } from 'react-redux';
import ListUI from './listsUI';
import React, { Component } from 'react';
import { ListAsyac } from './store/actionCreators'
import store from '../../store/index'
class Home extends Component {
  render() {
    return (
      <ListUI {...this.props}></ListUI>
    )
  }
  componentDidMount() {
    store.dispatch(ListAsyac())
  }
}

//输入
const mapStateToProps = ({List}) => {
  return {
    List: List
  }
}

//输出
const mapDispatchToProps = () =>{
  var t = 0;
  return {
    addClickLisk: (moiveId) => {
      var i = 12;
      var j =23;
      var urlstr = (moiveId.slice(i + (t * 10), j + (t * 10) - 1)).join("%2C");
      if (urlstr){
        store.dispatch(ListAsyac(urlstr))
        t++
      }
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
