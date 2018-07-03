import React from 'react';
import './footer.css';
import { withRouter, NavLink } from 'react-router-dom';

class Footer extends React.Component{
  constructor( props ){
    super( props );
    this.state = {
      navArr: [
        {
          path: '/company',
          title: '职位'
        },
        {
          path: '/search',
          title: '搜索'
        },
        {
          path: '/main',
          title: '我的'
        }
      ]
    }
  };
  render(){
    return (
      <footer className="footBox">
        {
          this.state.navArr.map(function( v,i ){
            return (
              <div key={i}>
              <NavLink to={v.path}>
                <span className="icon"></span>
                <span>{ v.title }</span>
              </NavLink>
                 
              </div>
            )
          }.bind(this))
        }
      </footer>
    )
  }
};

export default withRouter(Footer);