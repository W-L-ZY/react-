import React, { Component } from 'react';
import { Switch, NavLink,Redirect, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../../redux/redux';
// style
import './home.css';

import store from '../../redux/store';
import Company from '../Company';
import Search from '../Search';
import User from '../User';
import Signed from '../Signed';
import City from '../City';
import Not from '../404';

class Home extends Component{
  constructor( props ){
    super( props );
    this.state = {
      navArr: [
        {
          path: '/home/company',
          title: '职位',
          icon: 'icon '
        },
        {
          path: '/home/search',
          title: '搜索',
          icon: 'icon '
        },
        {
          path: '/home/user',
          title: '我的',
          icon: 'icon '
        }
      ],
    }
  };

  render(){
    // console.log(this.props);
    return (
      <div className="Home">
        <header className="headBox">
          拉勾网
        </header>
        <Provider store={store}>
          <div className="view">
            <Switch>
              <Route path={this.props.match.path + "/company"} component={Company} />
              <Route path={this.props.match.path + "/search"} component={Search} />
              <Route path="/home/city" component={City} />
              {
                this.props.isLogin ? <Route path={this.props.match.path + "/user"} component={Signed} /> : <Route path={this.props.match.path + "/user"} component={User} />
              }
              <Redirect to={this.props.match.path + "/company"} />
            </Switch>
          </div>
        </Provider>
        <footer className="footBox">
          {
            this.state.navArr.map(function( v,i ){
              return (
                <div key={i}>
                  <NavLink to={v.path} className="btn"> 
                    <span className="icon"></span>
                    <span>{ v.title }</span> 
                  </NavLink>
                </div>
              )
            })
          }
        </footer>
      </div>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);