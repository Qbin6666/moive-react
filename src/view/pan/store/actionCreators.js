import axios from 'axios';
import { INIT_LIST, INIT_LIST_SCREEN, INIT_LIST_SCREEN_LIST, INIT_LIST_TWO, CITY_LIST, INIT_LIST_SCREEN_TWO } from './actionTypes'
let agency_port = 'https://bird.ioliu.cn/v1/?url=';
let urlList = '';
let arr = [];
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
    // list.coming[i].comingTitle = list.coming[i].comingTitle.split(' ')[0]
  }
  let day = list.coming[0].comingTitle
  for (let j = 1; j < list.coming.length; j++) {
    if (list.coming[j].comingTitle === day) {
      list.coming[j].comingTitle = ""
    } else {
      day = list.coming[j].comingTitle
    }
  }
  return {
    type: INIT_LIST_SCREEN_LIST,
    list
  }
}


//即将上映分页操作
export const ScreenListMTwo = (list) => {
  for (let i = 0; i < list.coming.length; i++) {
    list.coming[i].img = list.coming[i].img.split('w.h').join('128.180');
    // list.coming[i].comingTitle = list.coming[i].comingTitle.split(' ')[0]
  }
  let day = list.coming[0].comingTitle
  for (let j = 1; j < list.coming.length; j++) {
    if (list.coming[j].comingTitle === day) {
      list.coming[j].comingTitle = ""
    } else {
      day = list.coming[j].comingTitle
    }
    // console.log(day, list.coming[j].comingTitle)

  }
  return {
    type: INIT_LIST_SCREEN_TWO,
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
          localStorage.setItem('movieIds', JSON.stringify(res.data.movieIds))
          dispatch(MoiveList(res.data));
        })
        .catch(error => {
          console.log('请求失败')
        })
    } else {
      urlList = `http://m.maoyan.com/ajax/moreComingList?token=&movieIds=${moiveId}`
      axios.get(agency_port + urlList)
        .then(res => {
          dispatch(MoiveListTwo(res.data));
        })
        .catch(error => {
          console.log('请求失败', error)
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
export const screenListAsyac = (listId = 0) => {
  return (dispatch, getState) => {
    if (listId === 0) {
      axios.get(agency_port + 'http://m.maoyan.com/ajax/comingList?ci=30&token=&limit=10')
        .then(res => {
          // console.log(res.data.movieIds)
          localStorage.setItem('newmovieIds', JSON.stringify(res.data.movieIds ))
          dispatch(ScreenListM(res.data))
      })
    } else {
      axios.get(agency_port + `http://m.maoyan.com/ajax/moreComingList?ci=50&token=&limit=10&movieIds=${listId}`)
        .then(res => {
          // console.log(res.data)
          dispatch(ScreenListMTwo(res.data))
        })
    }
  }
}

//城市位置获取


export const CityList = (list) => {
  // console.log(list)
  console.log(555)
  for (var item in list) {
    var obj = {}
    obj.type = item;
    obj.namelist = list[item]
    arr.push(obj)
  }
  // console.log(arr);
  return {
    type: CITY_LIST,
    list: arr
  }
}

export const CityAsync = () => {

  return (dispatch, getState) => {

    // axios.get(agency_port +'https://www.ele.me/restapi/shopping/v1/cities')
    // .then(res => {
    //   console.log('城市位置获取成功s')
    //   // console.log(res.data)
    //   dispatch(CityList(res.data) )
    // })
    // .catch(error => {
    //   console.log(error,"请求失败")
    // })

    fetch(agency_port + 'https://www.ele.me/restapi/shopping/v1/cities')
      .then(response => response.json())
      .then(res => {
        // data就是我们请求的repos
        console.log('城市位置获取成功s')
        // console.log(res)
        dispatch(CityList(res))
      })


  }
}
