import React from 'react';
import './search.css';

import Pubsub from 'pubsub-js';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../../redux/redux';

class Search extends React.Component{
  constructor( props ){
    super( props );
    this.goCity = this.goCity.bind( this );
    this.getSouSuo = this.getSouSuo.bind( this );
    this.moreSouSuo = this.moreSouSuo.bind( this );
    this.state = {
      name: '全国'
    }
  }
  componentWillMount(){
    Pubsub.subscribe( 'city_name', ( msg,data )=>{
      this.setState({
        name: data,
        comList: []
      })
    } )
  }
  goCity(){
    this.props.history.push( '/home/city' );
  }
  getSouSuo(){
    this.souS.style.display = 'block';
    let searchVal = this.inp.value;
    let cityName = this.state.name;
    this.props.souSuo( cityName,searchVal );
  }
  moreSouSuo(){
    let searchVal = this.inp.value;
    let cityName = this.state.name;
    this.props.moreSS( cityName,searchVal,this.props.comNum );
  }
  render(){
    return (
      <div className="search">
        <div className="search_inp" ref={(searchPage)=>this.searchPage=searchPage} >
          <div className="search_left" onClick={this.goCity}>
            <span>{this.state.name}</span>
            <span className="city_icon"></span>
          </div>
          <div className="search_right">
            <input type='text' placeholder="搜索职位或公司" ref={(inp)=>this.inp=inp} />
            <div className="search_right_icon" onClick={this.getSouSuo}>
              <span ></span>
            </div>
          </div>
        </div>
        <div className="home_list" ref={(souS)=>this.souS=souS}>
          {
            this.props.comList == '' 
            ? <div className="no_search_list">
                拉勾上暂时没有这样的职位
              </div>
            : <ul >
                <div className="search_tj">将搜索地区和关键词设为定制条件</div>
                {
                  this.props.comList.map(( v,i,arr )=>{
                    return (
                      <li key={v.positionId}>
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
                {
                  this.props.comList.length<15
                  ? ''
                  :<li className="home_list_more" onClick={this.moreSouSuo} >加载更多</li>
                }          
                
              </ul>
          }
        </div>
      </div>
    )
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));