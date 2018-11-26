import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';
import './footer.scss';
class Footer extends Component{
    constructor(props) {
        super(props)

    }

   

    render(){
        return(
            <div className='footer1'>
               <ul className="dibu">
                   <li>
                   <NavLink to="/home" exact>
                        <i className="iconfont icon-dianying"></i>
                        <span>电影</span>
                    </NavLink>
                   </li>
                   <li>
                   <NavLink to="/Cinema">
                        <i className="iconfont icon-yingyuan"></i>
                        <span>影院</span>
                    </NavLink>
                   </li>
                   <li>
                   <NavLink to="/mytype">
                        <i className="iconfont icon-tubiaolunkuo-"></i>
                        <span>我的</span>
                    </NavLink>
                   </li>
               </ul>
            </div>
        )
    }
}
export default Footer;  