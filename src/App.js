import React from 'react';

import Counter from './components/Counter';
import './App.css';

const startCount = 99;

function App() {
  return (
    <div className="App">
      <Counter start={startCount} />
      {/* <Counter /> */}
    </div>
  );
}

export default App;
