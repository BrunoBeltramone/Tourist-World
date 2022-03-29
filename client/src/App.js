import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route path={'/countries'}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
