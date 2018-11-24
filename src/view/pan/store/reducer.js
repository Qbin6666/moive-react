import { INIT_LIST, INIT_LIST_SCREEN, INIT_LIST_SCREEN_LIST, INIT_LIST_TWO, CITY_LIST, INIT_LIST_SCREEN_TWO, PAGEADD, PAGEADDLIST} from './actionTypes';
const defaultState = {
  movieIds: [], //热映
  movieList: [],
  ScreenList: [], // 上映
  ScreenPaging: [],
  ScreenListM: [], // 上映列表
  ScreenPagingM: [],
  CityList: [],  //城市列表
  isShow: [],
  page: 0,
  pageList: 0,
  ordertime: '',
  scheigthNum: 0
}

export default (state = defaultState, action) => {
  // let newState = JSON.parse(JSON.stringify(state))
  // newState.isShow.push(localStorage.getItem('more'));
  // console.log(newState)
  if (action.type === INIT_LIST) {
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
    // console.log(action.list )
    newState.ScreenListM = action.list.coming;
    newState.ScreenPagingM = action.list.movieIds;
    // console.log(newState.ScreenListM)
    return newState;
  }
  if (action.type === INIT_LIST_TWO) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.movieList = [...newState.movieList, ...action.list.coming];
    // console.log(newState.movieList)
    return newState;
  }
  if (action.type === INIT_LIST_SCREEN_TWO) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.ScreenListM = [...newState.ScreenListM, ...action.list.coming]
    return newState
  }
  if (action.type === CITY_LIST) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.CityList = action.list
    return newState
  }

  if (action.type === PAGEADD) {
    let newState = JSON.parse(JSON.stringify(state));
    // let num = (String(newState.movieIds.length)).substr(0, 1)
    // console.log(state.page)
    newState.page = state.page+1;
    return newState
  }
  // NEWPAGEADD
  if (action.type === 'NEWPAGEADD') {
    let newState = JSON.parse(JSON.stringify(state));
    newState.page = 0;
    return newState
  }

  if (action.type === PAGEADDLIST) {
    let newState = JSON.parse(JSON.stringify(state));

    newState.pageList = state.pageList + 1;
    return newState
  }
  if (action.type === 'ORDERTIME') {
    // console.log(5555555)
    let newState = JSON.parse(JSON.stringify(state));
    newState.ordertime = action.ordertime
    return newState
  }
  if (action.type === 'SCHEIGTH') {
    // console.log(5555555)
    let newState = JSON.parse(JSON.stringify(state));
    newState.scheigthNum = action.sc
    return newState
  }


  return state
}
