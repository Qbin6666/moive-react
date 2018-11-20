import { SET_CITY_CINEMA } from './actionType';
import axios from 'axios';
var agency_port = 'https://bird.ioliu.cn/v1/?url=';
var url = 'http://m.maoyan.com/ajax/cinemaList'
var limit = 0;

export const setCityCinecma = () => {
  // console.log(1);
  limit += 10
  return (dispatch, getState) => {
    axios.get(agency_port+url
      ,{
      params: {
        // ci:30
        day:'2018-11-20',
        offset:0,
        limit: limit,
        districtId:-1,
        lineId:-1,
        hallType:-1,
        brandId:-1,
        serviceId:-1,
        areaId:-1,
        stationId:-1,
        item:'',
        updateShowDay:true,
        reqId:1542695148545,
        cityId:30
      }
    }
    )
    .then(res=>{
      console.log(res.data);
      dispatch({
        type: SET_CITY_CINEMA,
        cityCinema: res.data.cinemas
      })
    })
  }
}
