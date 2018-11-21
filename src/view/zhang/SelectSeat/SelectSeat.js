import React, { Component} from 'react';
import { connect } from 'react-redux';
import SelectSeatUI from './SelectSeatUI';

class SelectSeat extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render(){
    return(
      <SelectSeatUI></SelectSeatUI>
    )
  }
}
const mapStateToProps = ({ SelectSeat }) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SelectSeat);
