import axios from 'axios';
import { INIT_LIST, INIT_LIST_SCREEN, INIT_LIST_SCREEN_LIST, INIT_LIST_TWO} from './actionTypes'
let agency_port = 'https://bird.ioliu.cn/v1/?url=';
let urlList = '';
// 电影正在热映请求
export const MoiveList = (list) => {
  for (let i = 0; i < list.movieList.length; i++) {
    list.movieList[i].img = list.movieList[i].img.split('w.h').join('128.180')
  }
  return {
    type: INIT_LIST,
    list
  }
}

//电影正在热映请求二次追加
export const MoiveListTwo = (list) => {
  for (let i = 0; i < list.coming.length; i++) {
    list.coming[i].img = list.coming[i].img.split('w.h').join('128.180')
  }
  return {
    type: INIT_LIST_TWO,
    list
  }
}

// 即将上映请求
export const ScreenList = (list) => {
  for (let i = 0; i < list.coming.length; i++) {
    list.coming[i].img = list.coming[i].img.split("w.h").join('170.230')
    list.coming[i].comingTitle = list.coming[i].comingTitle.split(' ')[0]
  }
  return {
    type: INIT_LIST_SCREEN,
    list
  }
}

// 即将上映请求列表
export const ScreenListM = (list) => {
  for (let i = 0; i < list.coming.length; i++) {
    list.coming[i].img = list.coming[i].img.split("w.h").join('128.180')
    list.coming[i].comingTitle = list.coming[i].comingTitle.split(' ')[0]
  }
  let day = list.coming[0].comingTitle
  list.coming[0].comingTitle = list.coming[0].comingTitle + list.coming[0].showInfo.split(" ")[1].substr(1, 2)
  for (let j = 1; j < list.coming.length; j++) {
    console.log()
    if (list.coming[j].comingTitle === day) {
      list.coming[j].comingTitle = ""
    } else {
      day = list.coming[j].comingTitle
      list.coming[j].comingTitle = list.coming[j].comingTitle + list.coming[j].showInfo.split(" ")[1].substr(1, 2)
    }
  }
  return {
    type: INIT_LIST_SCREEN_LIST,
    list
  }
}
// 电影正在热映请求
export const ListAsyac = (moiveId = 0) => {
  // console.log(moiveId)
  return (dispatch, getState) => {
    if (moiveId === 0) {
      urlList = 'http://m.maoyan.com/ajax/movieOnInfoList?token='
      axios.get(agency_port + urlList)
        .then(res => {
          dispatch(MoiveList(res.data));
        })
    } else {
      urlList = `http://m.maoyan.com/ajax/moreComingList?token=&movieIds=${moiveId}`
      axios.get(agency_port + urlList)
        .then(res => {
          console.log("热映请求数据请求成功");
          dispatch(MoiveListTwo(res.data));
      })
    }
  }
}
//即将上映请求
export const screenAsyac = () => {
  return (dispatch, getState) => {
    axios.get(agency_port + 'http://m.maoyan.com/ajax/mostExpected?ci=30&limit=10&offset=0&token=')
      .then(res => {
        dispatch(ScreenList(res.data))
      })
  }
}
//即将上映请求列表
export const screenListAsyac = () => {
  return (dispatch, getState) => {
    axios.get(agency_port + 'http://m.maoyan.com/ajax/comingList?ci=30&token=&limit=10')
      .then(res => {
        dispatch(ScreenListM(res.data))
      })
  }
}
