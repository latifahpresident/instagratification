import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux'
import { Route, Switch, withRouter} from 'react-router-dom';
import Layout from './utilities/hoc/Layout/Layout';
import Feed from './containers/Feed/Feed';
import Profile from './containers/Profile/Profile';
import './App.css';
import Auth from './containers/Auth/Auth';
import LogIn from './containers/Auth/LogIn';
import firebase from './utilities/firebaseConfig';
import { authenticateUser } from './store/actions/user';

const App = () => {
  const dispatch = useDispatch();
    useEffect(() => {
          firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              const { uid } = user;
                firebase.auth()
                .currentUser.getIdToken()
                .then((idToken) => {
                  if(idToken) {
                      dispatch(authenticateUser(uid, idToken));
                          } else {
                    console.log("no token")
                  }
                })
                .catch((err) => {
                  console.log(err.message);
                });
            }
          })
      return () => {
        console.log("unsubscribe ");
      };
    }, [dispatch]);
  let routes = (
    <Switch>
      {/* This will be changed to /feed/:id once route is up on backend */}
      {/* <Route path='/feed/:id' component={Feed}/> */}
      <Route exact path='/signup' component={Auth}/>      
      <Route exact path='/profile/:id' component={Profile}/>

      <Route exact path='/signin' component={LogIn}/>
      <Route exact path='/' component={Feed}/>
      {/* <Route exact path='/profile/:id' component={Profile}/> */}

    </Switch>
  )
  return (
    <div>
      <Layout>{routes}</Layout>
    </div>
  );
}

export default withRouter(App);
