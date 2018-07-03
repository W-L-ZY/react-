import React from 'react';
import './user.css';
import { withRouter } from 'react-router-dom';

class User extends React.Component{
  constructor( props ){
    super( props );
    this.goLo = this.goLo.bind( this );
  }
  goLo(){
    this.props.history.push( '/login' );
  }
  render(){
    return (
      <div className="user">
        <div className="user_login">
          <span onClick={this.goLo}>登录 / 注册</span>
        </div>
        <div className="user_type">
          <div>投递</div>
          <div className="right">面试</div>
          <div>邀约</div>
          <div className="right">收藏</div>
        </div>
      </div>
    )
  }
};

export default withRouter(User);