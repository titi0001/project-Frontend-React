import './App.css';
import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    // return (<p>Sistema Solar</p>);
    return (
      <>
        <Header />
        <SolarSystem />
      </>
    );
  }
}

export default App;
