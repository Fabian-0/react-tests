import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import App from './components/App';
import About from "./components/About";
import FAQ from "./components/FAQ";
import Home from "./components/Home";
import Store from "./components/Store";
import RootLink from "./components/RootLink";
import NavigatorBar from './components/NavigatorBar';

function NavigatorApp() {
  return (
    <Router>
      <NavigatorBar />
      <Switch>
        <Route path="/home" component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/faq" component={ FAQ } />
        <Route path="/store" component={ Store } />
        <Route path="/app" component={ App } />
        <Route exact path="/" />
        <Route path="*" >
          <>
            <p>;v</p>
            <RootLink />
          </>  
        </Route>
      </Switch>
    </Router>  
  );
}

export default NavigatorApp;