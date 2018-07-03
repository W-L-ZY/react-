import React from 'react';
import './signed.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../../redux/redux';
class Signed extends React.Component{
  constructor( props ){
    super( props );
    this.goLogin = this.goLogin.bind( this );
  }
  goLogin(){
    this.props.changeLogin()
  }
  render(){
    return (
      <div className="signed">
        <div className="signed_msg">
          <span>简历></span>
          <div className="signed_msg_pic" >
            <img src="https://www.lgstatic.com/images/myresume/default_headpic.png" alt=""/>
          </div>
          <div className="signed_msg_name">王漂亮</div>
        </div>
        <div className="signed_type">
          <div>投递</div>
          <div className="right">面试</div>
          <div>邀约</div>
          <div className="right">收藏</div>
        </div>
        <button className="signed_btn" onClick={this.goLogin}>退出登录</button>
      </div>
    )
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signed));