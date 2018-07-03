import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Toast, Button } from 'antd-mobile';
import Axios from 'axios';
import './Register.css';
import { mapDispatchToProps, mapStateToProps } from '../../redux/redux';

class Register extends React.Component{
  constructor( props ){
    super( props );
    this.goLogin = this.goLogin.bind( this );
    this.name = this.name.bind( this );
    this.pwd = this.pwd.bind( this );
    this.getImg = this.getImg.bind( this );
    this.handlerClick = this.handlerClick.bind( this );
    this.state = {
      src: "https://passport.lagou.com/vcode/create?from=register"
    }
  }
  // 点击登录跳转到登录页面
  goLogin(){
    this.props.history.push( '/login' );
  }
  // 存储名字
  name( e ){
    this.props.changeName( e.target.value );
  }
  // 存储密码
  pwd( e ){
    this.props.changePwd( e.target.value );
  }
  addUser( data ){    
    let url = "http://192.168.43.181:4000/register";
    let str = JSON.stringify( data );
    Axios.get( url,{params:{str}}).then(( res )=>{
            if ( res.data.code === 200 ) {
              this.props.changeLogin();
            }
            Toast.info( res.data.msg, 1,()=>{
              this.props.history.push( res.data.href )
            })
          })
  }
  //正则验证
  handlerClick(){
    // 验证输入内容
    if ( this.props.login.userName === '' || this.props.login.userName === null ) {
      this.node.innerHTML = '用户名不能为空'
    }else if ( !/^1[3|5|7|8][0-9]{9}$/.test( this.props.login.userName ) && this.props.login.userName !== '' ) {
      this.node.innerHTML = '用户名格式不正确'
    }
    else if( this.props.login.userPwd === '' || this.props.login.userPwd === null ){
      this.node.innerHTML = '密码不能为空'
    }
    else if( !/^[a-zA-Z]\w{5,15}$/.test( this.props.login.userPwd ) && this.props.login.userPwd !== '' ){
      this.node.innerHTML = '请输入第一个为字母的6~16位密码'
    }
    else{
      this.node.innerHTML = '';
    }
    // 执行axios请求
    this.addUser( this.props.login );
  }
  getImg(){
    this.setState({
      src: "https://passport.lagou.com/vcode/create?from=register&" + new Date().getTime()
    }) 
  }
  render(){
    console.log( this.state.src );
    
    return (
      <div className="register">
        <div className="register_top">
          <span className="register_top_left">注册拉勾</span>
          <span onClick={this.goLogin}>登陆</span>
        </div>
        <div className="register_text">
            <input type="text" placeholder="请输入常用手机号" onBlur={this.name} />
            <div className="pcode">
              <input type="password" placeholder="请证明你不是机器人" />
              <img src={this.state.src} width="2" height="2" alt="图片验证码" onClick={this.getImg} />
            </div>
            <div className="pwd">
              <input type="password" placeholder="请输入密码" onBlur={this.pwd} />
            </div>
        </div>
        <div className="register_tips" ref={ (node)=>this.node=node }></div>
        <div className="register_btn">
          <Button onClick={this.handlerClick}>注册</Button>
        </div>
        <div className="register_bot">注册拉钩代表你已同意《拉勾用户协议》</div>
      </div>
    )
  }
};
export default withRouter( connect(mapStateToProps, mapDispatchToProps)(Register) );