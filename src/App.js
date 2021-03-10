import React, { useState } from "react";
import { Link, Switch, BrowserRouter, Route } from 'react-router-dom';
import RedirectTest from "./Exercises/ContextExcercise/RedirectTest";
import "./App.css";

function App() {

  const [ testState, setTestState ] = useState(7);

  return (
    <>
      
      <BrowserRouter>
        <ul>
          <li>
            <Link to={{
              pathname: "/test/1",
              state: {data: testState}
            }}>test</Link>
          </li>
          <li>
            <Link to={{
              pathname: "/test/2",
              state: {data: testState}
            }}>test</Link>
          </li>
          <li>
            <Link to={{
              pathname: "/test/3",
              state: {data: testState}
            }}>test</Link>
          </li>
          <li>
            <Link to="/test/4">test</Link>
          </li>
          <li>
            <Link to={{
              pathname: "/test/5",
              state: {data: testState}
            }}>test</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/test/:test" component={RedirectTest} />
          <Route path="/">
            <p>state {testState}</p>
          </Route>
        </Switch>
      </BrowserRouter>
      
    </>
  );
}

export default App;
