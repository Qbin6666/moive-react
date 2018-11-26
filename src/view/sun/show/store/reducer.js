const defaulState = {
  showList: [],
  cinemaData:{},
  showTime:{},
  plist:[]
}
export default (state = defaulState ,action) => {
  if(action.type === 'SET_SHOW_LIST') {
    let newState = JSON.parse(JSON.stringify(state));
    newState.showList = action.showList;
    newState.cinemaData = action.cinemaData
    // console.log(newState);
    return newState;
  }
  if (action.type === 'SHOW_TIME') {
    // console.log(action);
    let newState = JSON.parse(JSON.stringify(state));
    newState.showTime = action.showTime;
    return newState;
  }
  if (action.type ==='SET_PLIST'){
    console.log(action);
    let newState = JSON.parse(JSON.stringify(state));
    newState.plist = action.plist;
    return newState;
  }
  return state;
}
