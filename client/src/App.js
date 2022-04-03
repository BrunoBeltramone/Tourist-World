import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './components//Home/Home.jsx'
import Activity from './components/Activity/Activity';
import About from './components/About/About';
import Landing from './components/Landing_Page/Landing';

function App() {
  return (
    <div className="App">
      <Route exact path={'/'}>
        <Landing />
      </Route>

      <Route path={'/countries'}>
        <NavBar/>
        <Home />
      </Route>

      <Route path={'/activity'}>
        <NavBar/>
        <Activity />
      </Route>

      <Route path={'/about'}>
        <NavBar/>
        <About />
      </Route>
    </div>
  );
}

export default App;
