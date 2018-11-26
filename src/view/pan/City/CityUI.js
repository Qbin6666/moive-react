import React from 'react';
import './city.scss';

const CityUI = (props) => {
  // console.log(props.List.CityList)
  return (
    <div className='city'>
      <div className="city-title" id="location">定位城市</div>
      <div className="city-list">
        <div className="location-city clearfix">定位失败，请点击重试</div>
      </div>
      <div id="lately" className={props.LatelyCity.length === 0 ? "city-title city-title-hide" : "city-title"}>最近访问城市</div>
      <div className="city-list">
        {
          props.LatelyCity.map((item, index) => {
            return (
              <div key={index}
              className="location-city"
                onClick={() => {
                  props.addCity(item)
                }}
              >{item}</div>
            )
          })
        }
      </div>
      <div className="city-title" id="hot">热门城市</div>
      <div className="city-list">
        {
          props.hotCity.map((item, index) => {
            return (
              <div className="location-city"
                key={index}
                onClick={() => {
                  props.addCity(item.name)
                }}
              >{item.name}</div>
            )
          })
        }

      </div>

      {
        props.List.CityList.map((item, index) => {
          return (
            <dl key={index}>
              <dt className='city-title' id={item.type}>{item.type}</dt>
              {
                item.namelist.map((items, index) => {
                  return (
                    <dd className='city-title-dd'
                      key={index}
                      onClick={() => {
                        props.addCity(items.name)
                      }}
                    ><span>{items.name}</span></dd>
                  )
                })
              }
            </dl>
          )
        })
      }
      <div className='nav'>
        <div className='nav-letter'

          onClick={() => {
            props.Scroll('location')
          }}
        >定位</div>
        <div className={props.LatelyCity.length === 0 ? 'nav-letter city-title-hide' : 'nav-letter'}
          onClick={() => {
            props.Scroll('lately')
          }}

        >最近</div>
        <div className='nav-letter'

          onClick={() => {
            props.Scroll('hot')
          }}
        >热门</div>
        {
          props.List.CityList.map((item, index) => {
            return (
              <div className='nav-letter'
                key={index}
                onClick={() => {
                  props.Scroll(item.type)
                }}
              >{item.type}</div>
            )
          })
        }
      </div>
    </div>
  )
}
export default CityUI;
