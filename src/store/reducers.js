// 叫做 reducer 的拆分
// 可以使用 redux 模块提供了一个  combineReducers 东西，
import { combineReducers } from 'redux';
import List from '../view/pan/store/reducer.js'

let zongdeReducers = combineReducers({
  List

})

// console.log(zongdeReducers);

export default zongdeReducers;
