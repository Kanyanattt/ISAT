import React, { useState } from 'react';
import './App.css';
import Dashboard from './Comeponents/Page/Dashboard'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
      </BrowserRouter>

  );
}

export default App;