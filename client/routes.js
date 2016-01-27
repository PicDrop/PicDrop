import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App.js';
import SplashView from './Splash/SplashView';
import Main from './Main/Main';
import Collection from './Main/Content/Images/Collection/Collection';
import Image from './Main/Content/Images/Image/Image';


export default (
  <Route path="/" component={App}>
    <Route path="splash" component={SplashView} />
    <Route path="main" component={Main}>
      <Route path="collection" component={Collection} />
      <Route path="image" component={Image} />
    </Route>
  </Route>

);
