import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './home/Home';
import Work from './work/Work';
import Showcase from './showcase/Showcase';
import Publications from './publications/Publications';

function App() {
  return (
    <BrowserRouter basename="/web-profile">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/showcase" component={Showcase} />
        <Route exact path="/publications" component={Publications} />
        <Route component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
