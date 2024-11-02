

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Details />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


