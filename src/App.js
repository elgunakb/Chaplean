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
      <main>
        <Sidebar />
        <Home />
        <Searchbar />
      </main>
      <Footer />
    </>
  );
}

export default App;
