import React, {Component,Fragment} from 'react'
import {NavLink} from 'react-router-dom';
import axios from 'axios'
import './login.scss';

class Login extends Component {
    constructor(props){
        super(props);
       
    }
  

    render() {
        return (
            <Fragment>
                <div className="header">
                    <i className="iconfont icon-fanhui-copy"></i>
                    <h3>猫眼电影</h3>
                    <span></span>
                </div>
                <p>美团账户登录</p>
              
                    <input type='text' placeholder='手机号码' name='phone' id='phone' ref='phone'/>
                    <input type='password' placeholder='密码' name='password' id='pswd' ref='psd'/>
         
                <button className='btn' onClick={this.btnclick.bind(this)}>登录</button>
                <div className="tijiao">
                <NavLink to={'/register'}>
               
                <i className="iconfont  icon-down-trangle">去注册</i>
                   
                 </NavLink>   
                    <a href="#">找回密码</a>
                </div>
            </Fragment>
        )
    }
    btnclick(){
         const phoneValue = this.refs.phone.value;
         const psdValue=this.refs.psd.value;
        console.log(this.refs.phone.value)
//点击登录链接后台
        axios.post('http://localhost:4000/login',{
            phone:phoneValue,
            password:psdValue

        },{


        }).then(result =>{
        var res=result.data;
        console.log(res);
        if(res.code===0){
            // alert('登陆成功')
            localStorage.setItem('phone',phoneValue)
            this.props.history.push('/mytype');
           
        }else{
            alert(res.msg)
        }
            })

    }
    handleGoRegister(){
        this.props.history.push('/register');
        
    }
    
}

export default Login

