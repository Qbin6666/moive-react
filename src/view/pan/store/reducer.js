import { INIT_LIST, INIT_LIST_SCREEN, INIT_LIST_SCREEN_LIST, INIT_LIST_TWO } from './actionTypes';
const defaultState = {
  movieIds:[], //热映
  movieList:[],
  ScreenList:[], // 上映
  ScreenPaging: [],
  ScreenListM: [], // 上映列表
  ScreenPagingM: []
}
export default (state=defaultState,action) => {
  if (action.type === INIT_LIST){
    let newState = JSON.parse(JSON.stringify(state))
    newState.movieIds = action.list.movieIds;
    newState.movieList = action.list.movieList;
    return newState
  }
  if (action.type === INIT_LIST_SCREEN) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.ScreenList = action.list.coming;
    newState.ScreenPaging = action.list.paging;
    return newState
  }
  if (action.type === INIT_LIST_SCREEN_LIST) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.ScreenListM = action.list.coming;
    newState.ScreenPagingM = action.list.paging;
    // console.log(newState.ScreenListM)
    return newState;
  }
  if (action.type === INIT_LIST_TWO) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.movieList =[...newState.movieList,...action.list.coming] ;
    // console.log(newState.movieList)
    return newState;
  }
  return state
}
