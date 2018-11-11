import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppMenu from './components/AppMenu';
import AppFooter from './components/AppFooter';
import AppMain from './components/AppMain';
import AppProducts from './components/AppProducts';
import AppLogin from './components/AppLogin';
import AppJoin from './components/AppJoin';
import AppCart from './components/AppCart';

import AppProductPage from './components/AppProductPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/AppMenu.css';
import './css/AppProductPage.css';
import './css/AppProductComponents.css';
import './css/AppMain.css';
import './css/AppLogin.css';
import './css/AppJoin.css';
import './css/AppCart.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppMenu />
        <Switch>
          <Route exact path="/" render={props => <AppMain />} />
          <Route exact path="/tourmd" render={state => <AppProducts {...state} />} />
          <Route exact path="/officialmd" render={state => <AppProducts {...state} />} />
          <Route exact path="/exhibition" render={state => <AppProducts {...state} />} />
          <Route exact path="/albums" render={state => <AppProducts {...state} />} />
          <Route exact path="/lovemyself" render={state => <AppProducts {...state} />} />
          <Route exact path="/dvd" render={state => <AppProducts {...state} />} />
          <Route exact path="/login" render={props => <AppLogin />} />
          <Route exact path="/join" render={props => <AppJoin />} />
          <Route exact path="/cart" render={props => <AppCart />} />
          <Route path="/productpage/:id" render={state => <AppProductPage {...state} />} />
        </Switch>
        <AppFooter />
      </React.Fragment>
    );
  }
}

export default App;