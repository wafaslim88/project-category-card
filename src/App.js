import React from 'react';
import Stays from './components/Stays';
import Experiences from './components/Experiences';
import Adventures from './components/Adventures';
import Restaurants from './components/Restaurants';
import './App.css';


function App() {
  return (
    <div className="App">
      <Stays/>
      <Experiences/>
      <Adventures/>
      <Restaurants/>
    </div>
  );
}

export default App;
