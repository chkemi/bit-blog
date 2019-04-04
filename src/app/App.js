import React, { Component } from 'react';

import Header from './components/header/Header';
import Footer from './components/Footer';

import './App.css';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
