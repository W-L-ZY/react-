import React, { Component } from 'react';
import { connect } from 'react-redux';

import './company.css';
import { mapStateToProps, mapDispatchToProps } from '../../redux/redux';
import { withRouter } from 'react-router-dom';
import Adver from '../Adver';
import Compile from '../Compile';

class Company extends Component{
  constructor( props ){
    super( props );
    this.more = this.more.bind( this );
  };
  componentWillMount(){
    this.props.getData( 1 )
  }
  more(){
    // this.props.changeNum(this.props.num);
    this.props.getMore( this.props.num )
  }
  detail( id ){
    // console.log( this.props,id );
  }
  render(){
    return (
      <div>
        <Compile/>
        <ul className="home_list">
          {
            this.props.arr.map(( v,i,arr )=>{
              return (
                <li key={i} onClick={this.detail.bind( this,v.positionId )}>
                  <div className="home_list_img">
                    <img src={'https://www.lgstatic.com/' + v.companyLogo} alt={v.companyName}/>
                  </div>
                  <div className="home_list_text">
                    <div className="home_list_text_title">
                      <h4>{v.companyName}</h4>
                      <p>{v.positionName}</p>
                      <span>{v.createTime}</span>
                    </div>
                    <div className="home_list_text_price">{v.salary}</div>
                  </div>
                </li>
              )
            })
          }
          <li className="home_list_more" onClick={this.more} >加载更多</li>
        </ul>
        <Adver/>    
        <div className="copyRight">
          <p>©2015 lagou.com, all right reserved </p>
          <p>
            <span className="selected">移动版</span>
            <span>电脑版</span>
            <span>回顶部</span>
          </p>
        </div>
      </div>
    )
  }
}
export default withRouter( connect(mapStateToProps, mapDispatchToProps)(Company) );