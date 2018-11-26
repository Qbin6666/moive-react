import axios from 'axios';
var agency_port = 'https://bird.ioliu.cn/v1/?url=';
var url = 'http://m.maoyan.com/ajax/cinemaDetail';

export const setShowList = () => {
  return(dispatch,getState) => {
    axios.get(agency_port+url,{
      params:{
        cinemaId: 13055
      }
    })
    .then(res => {
      // console.log(res.data)
      dispatch({
        type:'SET_SHOW_LIST',
        showList : res.data.showData.movies
      })
    })
  }
}
export const showTime = (index) => {
  return(dispatch,getState) => {
    axios.get(agency_port+url,{
      params: {
        cinemaId: 13055
      }
    })
    .then(res => {
      dispatch({
        type:'SHOW_TIME',
        showTime: res.data.showData.movies[index]
      })
    })
  }
}

