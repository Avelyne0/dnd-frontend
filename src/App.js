import React from 'react';
import './App.css';
import CharacterGenerator from './components/CharacterGenerator';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <CharacterGenerator />
    </div>
  );
}

export default App;
