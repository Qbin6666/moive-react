// 叫做 reducer 的拆分
// 可以使用 redux 模块提供了一个  combineReducers 东西，
import { combineReducers } from 'redux';
import SCReducer from '../view/zhang/SelectCinema/store/reducers';



let zongdeReducers = combineReducers({
  SelectCinema: SCReducer

})

// console.log(zongdeReducers);

export default zongdeReducers;
