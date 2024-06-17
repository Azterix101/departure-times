import React from 'react';
import './App.css';
import DepartureTimes from './components/DepartureTimes';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Departure Times</h1>
      </header>
      <main>
        <DepartureTimes />
      </main>
    </div>
  );
};

export default App;
