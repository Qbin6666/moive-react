import React ,{ Component,Fragment } from 'react';
import ShowUI from './ShowUI';
import { setShowList ,showTime } from './store/actionCreators'
import { connect } from 'react-redux';
import store from '../../../store';

let id = '';
class Show extends Component {
  render(){
    return(
      <Fragment>
        <ShowUI {...this.props} />
      </Fragment>
    )
  }
  componentDidMount() {
    id = this.props.location.pathname.split('/')[2];
    store.dispatch(setShowList(id));
  }

}
const mapStateToProps = ({ShowList}) => {
  if(ShowList.showList.length !== 0){
    for(let i = 0 ;i < ShowList.showList.length ; i++){
      ShowList.showList[i].img = ShowList.showList[i].img.replace(/w\.h/g,'148.208')
      // console.log(ShowList.showList[i].img)
    }
  }
  if (ShowList.showTime.img){
    ShowList.showTime.img = ShowList.showTime.img.replace(/w\.h/g, '148.208')
  }
  return {
    ShowList:ShowList.showList,
    showTime: ShowList.showTime,
    cinemaData: ShowList.cinemaData,
    plist: ShowList.plist
  }
}
const mapDispatchToProps = (dispatch, ownprops) => {
  return {
    showItem : (index,img) => {
      var li = document.getElementsByName('showItem');
      var ul = document.getElementById('moveUl');
      var bg = document.getElementsByClassName('infoImgs-top')[0];
      bg.style.background = `url(${img})`;
      for(let i = 0 ;i < li.length; i++){
        li[i].classList.remove('target');
      }
      li[index].classList.add('target');
      ul.style.transform = `translateX(${1.4 - index * 0.7}rem)`;
      store.dispatch(showTime(index,id));
      // console.log(mapDispatchToProps().setPlist())
    },
    setPlist :(lists,index) => {
      var dateShow = document.getElementsByClassName('dateShow');
      for (let i = 0; i < dateShow.length ; i++){
        dateShow[i].classList.remove('click');
      }
      dateShow[index].classList.add('click');
      store.dispatch({
        type:'SET_PLIST',
        plist:lists
      })
    },
    fan: () => {
      console.log(ownprops);
      ownprops.history.goBack();
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Show);
