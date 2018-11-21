import { SET_CITY_CINEMA } from './actionType'

const defaulState = {
  ci:'',
  cityCinema:[]
}
export default (state = defaulState, action) => {
  // console.log(state,action);
  // console.log(action.type === INIT_LIST);
  if (action.type === SET_CITY_CINEMA) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.cityCinema = action.cityCinema;
    return newState;
  }
  return state;
}
