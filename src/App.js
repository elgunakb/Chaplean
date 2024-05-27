import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import Searchbar from './components/Searchbar/Searchbar';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Sidebar />
        <Home />
        <Searchbar />
      </div>
      <Footer />
    </>
  );
}

export default App;
