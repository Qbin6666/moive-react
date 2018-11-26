import axios from 'axios';
var agency_port = 'https://bird.ioliu.cn/v1/?url=';
var url = 'http://m.maoyan.com/ajax/cinemaDetail';

export const setShowList = (id) => {

  return(dispatch,getState) => {
    axios.get(agency_port+url,{
      params:{
        cinemaId: id
      }
    })
    .then(res => {
      console.log(res.data)
      dispatch({
        type:'SET_SHOW_LIST',
        showList : res.data.showData.movies,
        cinemaData: res.data.cinemaData
      })
    })
  }
}
export const showTime = (index,id) => {
  return(dispatch,getState) => {
    axios.get(agency_port+url,{
      params: {
        cinemaId: id
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

