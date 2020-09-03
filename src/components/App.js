import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

const App = () => (
  <div className="App">
    <h1>React Calculator</h1>
    <Display result="0" />
    <ButtonPanel />
  </div>
);

export default App;
