import React, {Component,Fragment} from 'react'
import {NavLink} from 'react-router-dom';
import './register.scss';
import axios from 'axios'

class Register extends Component {
    constructor(props){
        super(props);
       this.btnclick1 = this.btnclick1.bind(this);
    
       this.handleGoRegister= this.handleGoRegister.bind(this)
    }
    // console.log(4444);
    
    // 注册
    btnclick1(){
        //  console.log( this);
        const phoneValue1 = this.refs.phone1.value;
        const psdValue1=this.refs.psd1.value;
        axios.post(
          "http://localhost:4000/register",
          {
            phone: phoneValue1,
            password: psdValue1
          },
          {

          }
        )
        .then(result => {
          var res = result.data;
          console.log(res);
          if (res.code === 0) {
            console.log("注册成功");
           this.props.history.push('/login');
          } else {
              alert(res.msg);
            console.log("注册失败", res.msg);
          }
        });
    }
    handleGoRegister(){

    }
    render() {

        return(
            <Fragment>
                 <div className="header">
                    <NavLink to={'/login'}>
                        <i className="iconfont icon-fanhui-copy"></i>
                    </NavLink>
                    <h3>猫眼电影</h3>
                    <span></span>
                </div>
                <p>美团账户注册</p>
              
                    <input type='text' placeholder='手机号码' name='phone' id='phone' ref='phone1'/>
                    <input type='password' placeholder='密码' name='password' id='pswd' ref='psd1'/>
         
                <button className='btn' onClick={this.btnclick1}>注册</button>
                <div className="tijiao">
                    <span></span>
                    <a href="#" onClick={this.handleGoRegister}>注册完成</a>
                    
                </div>
            </Fragment>    
        )

    }
}
export default Register