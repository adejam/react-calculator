import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => (
  <div className="App">
    <Display result="0" />
    <ButtonPanel calculate={calculate} />
  </div>
);

export default App;
