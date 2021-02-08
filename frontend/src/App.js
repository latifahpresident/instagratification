import React from 'react';
import { Route, Switch, withRouter} from 'react-router-dom';
import Layout from './utilities/hoc/Layout/Layout';
import Feed from './containers/Feed/Feed';
import Profile from './containers/Profile/Profile';
import './App.css';

const App = () => {
  let routes = (
    <Switch>
      {/* This will be changed to /feed/:id once route is up on backend */}
      {/* <Route path='/feed/:id' component={Feed}/> */}
      <Route path='/:id' component={Profile}/>

      <Route path='/' component={Feed}/>
    </Switch>
  )
  return (
    <div>
      <Layout>{routes}</Layout>
    </div>
  );
}

export default withRouter(App);
