import { INIT_LIST,INIT_MOVIE } from './actionTypes';
// 这个是小本本，这里要做的就是返回一个纯函数

// state 之前的状态
// action 动作
const defaultState = {
  list: [],
  movie: []
}

export default (state = defaultState, action) => {
  // console.log(state, action);
  if (action.type === INIT_LIST) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list = action.list;
    return newState;
  }
  if (action.type === INIT_MOVIE) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.movie = action.movie;
    return newState;
  }
  return state;
}
