// 这个文件就是一些 动作生成器 （action creator） 的  集合
import { INIT_LIST, INIT_MOVIE} from './actionTypes';
import axios from 'axios';
import {Toast} from 'antd-mobile'
/**
 * 初始化的一个 动作生成器
 * @param {Array} list 初始化的数据
 */
export const initList = (list) => {
  return {
    type: INIT_LIST,
    list,
  }
}

/**
 * 初始化的一个 动作生成器
 * @param {Array} movie 初始化的数据
 */
export const initMovie = (movie) => {
  return {
    type: INIT_MOVIE,
    movie,
  }
}

export const initListAsync = () => {
  // 动作生成器，由于使用了 redux-thunk 。动作生成器可以返回 函数了
  return (dispatch, getState) => {
    // dispatch store.dispatch 一个引用
    // getState store.getState 一个引用
    const apiProxy = 'https://bird.ioliu.cn/v1/?url='
    var url = 'http://m.maoyan.com/ajax/cinemaList?day=2018-11-20&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1542714189728&cityId=30'
    axios.get(apiProxy + url).then(result=>{
      dispatch(initList(result.data.cinemas))
    });
  }
}

export const initMovieAsync = (pid) => {
  // 动作生成器，由于使用了 redux-thunk 。动作生成器可以返回 函数了
  return (dispatch, getState) => {
    // dispatch store.dispatch 一个引用
    // getState store.getState 一个引用
    const apiProxy = 'https://bird.ioliu.cn/v1/?url='
    var url = `m.maoyan.com/ajax/detailmovie?movieId=${pid}`
    axios.get(apiProxy + url).then(result=>{
      Toast.hide()
      var movieList = result.data.detailMovie
      console.log(movieList)
      movieList.img = movieList.img.split('w.h').join('128.180')
      dispatch(initMovie(movieList))
    });
  }
}
