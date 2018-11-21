import { connect } from 'react-redux';
import ScreenUI from './ScreenUI';
import React, { Component } from 'react';
import store from '../../../store/index';
import { screenAsyac, screenListAsyac } from '../store/actionCreators'

class Screen extends Component {
  render() {
    return(
      <ScreenUI {...this.props}></ScreenUI>
    )
  }
  componentDidMount() {
    store.dispatch( screenAsyac() )
    store.dispatch( screenListAsyac() )
  }
}

const mapStateToProps = ({List}) => {
  return {
    List
  }
}

const mapDispatchToProps = ({

})
export default connect(mapStateToProps, mapDispatchToProps)(Screen);
