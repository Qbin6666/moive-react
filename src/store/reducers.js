// 叫做 reducer 的拆分
// 可以使用 redux 模块提供了一个  combineReducers 东西，
import { combineReducers } from 'redux';
import SCReducer from '../view/zhang/SelectCinema/store/reducers';
import CinemaReducer from '../view/sun/cinema/store/reducer';
import List from '../view/pan/store/reducer.js'
import ShowList from '../view/sun/show/store/reducer'



let zongdeReducers = combineReducers({
  SelectCinema: SCReducer,
  Cinema: CinemaReducer,
  List,
  ShowList
})
// console.log(zongdeReducers);
export default zongdeReducers;
