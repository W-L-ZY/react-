import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../../redux/redux';
import { withRouter } from 'react-router-dom';

import './compile.css';

class Compile extends Component{
  constructor( props ){
    super( props );
    this.goLogin = this.goLogin.bind( this );
  }
  goLogin(){
    this.props.history.push( '/login' );
  }
  render(){
    return(
      <div className="loginBox">
        <span>10秒钟定制职位</span>
        {
          this.props.isLogin ? <span>编辑</span> : <span onClick={this.goLogin} >去登陆</span>
        }
      </div>
    )
  }
}

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(Compile) );