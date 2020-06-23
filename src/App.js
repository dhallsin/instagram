import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import {
  Router,
  Switch,
  Route,
} from "react-router-dom";
import history from './history';


import Layout from './components/Layout'
import { ToastContainer } from 'react-toastify';
import FakeImage from './components/FakeImage'

function App() {
  return (
    <Router history={history}>
      <Switch>
          <Route path="/" exact component={Layout}/>
          <Route path="/image" exact component={FakeImage}/>
          <ToastContainer autoClose={3000}/>
          <GlobalStyles/>
      </Switch>
    </Router>
  );
}

export default App;
