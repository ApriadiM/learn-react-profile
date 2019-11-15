import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import AboutMe from './about';
import Contact from './contact';


const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={AboutMe} />
    <Route path="/contact" component={Contact} />
  </Switch>
)

export default Main;
