import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Dashboard from './pages/Dashboard';
import Header from './components/header&navbar/Header';
import NavbarComponent from './components/header&navbar/NavbarComponent';
import Services from './pages/Services';
import Footercomp from './components/footercomp/Footercomp';
import ScrollToTop from './components/ScrollToTop';
import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route element={<PrivateRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
        <Footercomp />
      </BrowserRouter>

    </>
  )
}

export default App
