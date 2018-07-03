import React from 'react';
import { Toast, Button } from 'antd-mobile';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../../redux/redux';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';

import './login.css';

class Login extends React.Component{
  constructor( props ){
    super( props );
    this.goRegister = this.goRegister.bind( this );
    this.findUserName = this.findUserName.bind( this );
    this.findUserPwd = this.findUserPwd.bind( this );
  }
  goRegister(){
    this.props.history.push( "/register" );
  }
  findUserName( e ){
    this.props.changeName( e.target.value );
  }
  findUserPwd( e ){
    this.props.changePwd( e.target.value );
  }
  
  findUser( data ){    
    let url = "http://192.168.43.181:4000/login";
    let str = JSON.stringify( data );
    Axios.get( url,{params:{str}}).then(( res )=>{
              if( res.data.code === 200 ){
                this.props.changeLogin();
                this.props.history.push( res.data.href )
              }else{
                Toast.info( res.data.msg, 1);
              }
            })
  }
  render(){
    return (
      <div className="login">
        <div className="login_top">
          <span className="login_top_left">登录拉勾</span>
          <span onClick={this.goRegister}>注册</span>
        </div>
        <div className="login_text">
          <input type="text" placeholder="请输入已验证的手机号或邮箱" onBlur={this.findUserName} />
          <input type="password" placeholder="请输入密码" onBlur={this.findUserPwd} />
        </div>
        <div className="login_btn">
          <Button onClick={this.findUser.bind( this,this.props.login )}>登录</Button>
        </div>
        <div className="login_bot">手机号登陆</div>
      </div>
    )
  }
};

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(Login) );