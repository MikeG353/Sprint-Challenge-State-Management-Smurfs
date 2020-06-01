import React from 'react';

// components
import SmurfForm from './SmurfForm'
import SmurfList from "./SmurfList";
import "./App.css";

const App = () => {
    
  return (
    <div className="App">
      <div className="SmurfForm" >
        <SmurfForm  />
      </div>
      <div className="SmurfList">
        <SmurfList />
      </div>
    </div>
  )
}

export default App;
