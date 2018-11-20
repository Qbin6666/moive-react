// 叫做 reducer 的拆分
// 可以使用 redux 模块提供了一个  combineReducers 东西，
import { combineReducers } from 'redux';
import CinemaReducer from '../view/sun/cinema/store/reducer';



let zongdeReducers = combineReducers({
  Cinema: CinemaReducer
})

// console.log(zongdeReducers);

export default zongdeReducers;
