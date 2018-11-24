// import React, { Component, Fragment } from 'react';
// import { initListAsync } from './store/actionCreators';
// import store from './store/index';
// class SelectCinema extends Component {
//   constructor(props) {
//     super(props);
//     // this.state({

//     // })
//     // console.log(store)
//     this.state = store.getState();
//     // console.log(this.state)
//     store.subscribe(() => {
//       this.setState(store.getState());
//     })
//   }

//   componentDidMount() {

//     console.log(this.state.list)
//     store.dispatch(initListAsync());
//   }
// }

// export default SelectCinema;
import React, { Component} from 'react';
import { connect } from 'react-redux';
import SelectCinemaUI from './SelectCinemaUI';
import { initListAsync,initMovieAsync } from './store/actionCreators';
import store from '../../../store/index'
import {Toast} from 'antd-mobile'
class SelectCinema extends Component {
  constructor(props) {
    super(props);
    this.pid = props.location.pathname.split('/')[2]
  }
  render(){
    return(
      <SelectCinemaUI {...this.props}></SelectCinemaUI>
    )
  }
  componentDidMount() {
    Toast.loading('加载中',false);
    store.dispatch(initListAsync());
    store.dispatch(initMovieAsync(this.pid));
  }
}
const mapStateToProps = ({ SelectCinema }) => {
  return {
    list:SelectCinema.list,
    movie:SelectCinema.movie
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//   }
// }

export default connect(mapStateToProps, null)(SelectCinema);
