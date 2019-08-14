import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function Page1(){
  return (
    <div><h1>Page 1</h1></div>
  )
}

function Page2(){
  return (
    <div><h1>Page 2</h1></div>
  )
}

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Page1} />
        <Route path="/page2/:id" component={Page2} />
      </Switch>
    </BrowserRouter>
  );
}
