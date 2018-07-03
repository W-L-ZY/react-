import React, { Component } from 'react';
import { Switch, withRouter,Redirect, Route } from 'react-router-dom';
// style
import './App.css';
import Home from './component/Home';
import Register from './component/Register';
import Login from './component/Login';
import { Provider } from 'react-redux';
import store from './redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App"> 
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Redirect to="/home" />
        </Switch>
      </div>
      </Provider>
    );
  }
}

export default withRouter(App);
