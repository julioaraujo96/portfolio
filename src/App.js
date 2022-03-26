//import logo from './logo.svg';
import React from 'react';
import { Helmet } from 'react-helmet';
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects'

function App() {
  return (
    <div className="font-uimono dark:bg-secondary transition duration-500">
    <Helmet>
        <meta name="description" content="Personal Portfolio"/>
        <title>Júlio Araújo - Homepage</title>
    </Helmet>
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
