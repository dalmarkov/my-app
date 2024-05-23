import React, { Suspense } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import './styles/main.css';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Contacts from './pages/Contacts';
import ScrollToTop from './utils/ScrollToTop';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={400}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}


function App() {
  return (
    <div className="App">
      <Router basename="/my-app">
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <AnimatedRoutes />
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

