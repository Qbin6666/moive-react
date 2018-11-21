import { connect } from 'react-redux';
import CinemaUI from './CinemaUI';
import React, {Component} from 'react';
import { setCityCinecma } from './store/actionCreators'
import store from '../../../store/index'

  class Cinema extends Component {
    constructor(props){
      super(props);
      this.state = {
        limit:10
      }
    }
    render(){
      return(
        <CinemaUI {...this.props}></CinemaUI>
      )
    }
    componentDidMount() {
      store.dispatch(setCityCinecma());
    }
  }
  const mapStateToProps = ({Cinema}) => {
    // console.log(Cinema.cityCinema)
    return {
      cityCinema: Cinema.cityCinema
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      moveCinema :() => {
        // cons
        store.dispatch(setCityCinecma());
      }
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Cinema);
