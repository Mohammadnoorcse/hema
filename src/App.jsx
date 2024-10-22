import React from 'react'
import Home from './page/Home';
import Navbar from './components/layout/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App