import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Layout from './components/Layout'
import FakeImage from './components/FakeImage'

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" exact component={Layout}/>
          <Route path="/image" exact component={FakeImage}/>
          <GlobalStyles/>
      </Switch>
    </Router>
  );
}

export default App;
