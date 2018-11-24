import React, {Component,Fragment} from 'react';
import './mytype.scss';
import Footer from '../../../components/Footer/index';
import Charen from '../images/charen.png'
import Shang from '../images/shangcheng.png'
import Ying from '../images/dianying.png'
class mytype extends Component{
    constructor(props){
        super(props);
        console.log(props)
       
    }

    componentWillMount() {
        console.log( localStorage.getItem('phone'))
        if(! localStorage.getItem('phone') ) {
            // console.log(this.props.history)
            this.props.history.push('/register')
        }
    }



    render(){
        return(
           <Fragment>
               <div className="navbar">
                    我的
               </div>
               <div className="heades">
                    <div>
                        <img src={Charen}></img>
                    </div>
               </div>
               <div className="orders">
                    <div className="title">
                        我的订单
                    </div>

                    <div className="title-line">

                    </div>
                    <div className="list">
                       <div className="mv">
                        <img src={Ying}></img>
                        <i>电影</i>
                       </div>
                       <div className="stroe">
                       <img src={Shang}></img>
                        <i>商城</i>
                       </div>
                    </div>
               </div>
              <div className="coupon">
                    <div className="item">
                        <span>在线观影</span>
                        <i className="iconfont icon-down-trangle"></i>
                    </div>
                    <div className="item">
                        <span>优惠巻</span>
                        <i className="iconfont icon-down-trangle"></i>
                    </div>
                    <div className="item">
                        <span>折扣卡</span>
                        <i className="iconfont icon-down-trangle"></i>
                    </div>
              </div>
               <Footer></Footer>
           </Fragment>
        )

    }
}
export default mytype;