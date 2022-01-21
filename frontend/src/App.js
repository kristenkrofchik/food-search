import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
          <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/results' element={<Results/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </Grommet>
  );
}

export default App;
