import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Grommet } from 'grommet';
import './App.css';
import Results from './components/Results';
import Homepage from './components/Homepage';
import NotFound from './components/NotFound';

function App() {
  return (
    <Grommet>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/results' component={Results} />
            <Route path='*' component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    </Grommet>
  );
}

export default App;
