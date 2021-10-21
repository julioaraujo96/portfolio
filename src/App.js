//import logo from './logo.svg';
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar/Navbar';
import './App.module.css';

function App() {
  return (
    <>
    <Helmet>
        <meta name="description" content="Personal Portfolio"/>
        <title>Júlio Araújo - Homepage</title>
    </Helmet>
    <Navbar/>
    </>
  );
}

export default App;
