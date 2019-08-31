import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './home/Home';
import Work from './work/Work';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/work" component={Work} />
        <Route component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
