import React, { Component } from 'react';
import "../css/reset.css";
import "../css/antd.css";
import Layout from './Layout/Layout';
import "./app.css";
import {Router,Link} from "react-router-dom";
import createHistory from "history/createBrowserHistory";
const customHistory = createHistory();
class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={customHistory}>
        <Layout/>
        </Router>
      </div>
    )
  }
}

export default App
