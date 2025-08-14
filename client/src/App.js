import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Tours from './pages/Tours';
import About from './pages/About';
import Vision from './pages/Vision';
import Contact from './pages/Contact';
import GalleFortTour from './pages/GalleFortTour';
import PotteryTour from './pages/PotteryTour';
import MoonstoneTour from './pages/MoonstoneTour';
import KalametiyaTour from './pages/KalametiyaTour';
import BriefGardenTour from './pages/BriefGardenTour';
import SinharajaTour from './pages/SinharajaTour';
import KanneliyaTour from './pages/KanneliyaTour';
import KoggalaTour from './pages/KoggalaTour';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Home />
          </PageTransition>
        } />
        <Route path="/tours" element={
          <PageTransition>
            <Tours />
          </PageTransition>
        } />
        <Route path="/galle-fort-tour" element={
          <PageTransition>
            <GalleFortTour />
          </PageTransition>
        } />
        <Route path="/pottery-tour" element={
          <PageTransition>
            <PotteryTour />
          </PageTransition>
        } />
        <Route path="/moonstone-tour" element={
          <PageTransition>
            <MoonstoneTour />
          </PageTransition>
        } />
        <Route path="/kalametiya-tour" element={
          <PageTransition>
            <KalametiyaTour />
          </PageTransition>
        } />
        <Route path="/brief-garden-tour" element={
          <PageTransition>
            <BriefGardenTour />
          </PageTransition>
        } />
        <Route path="/sinharaja-tour" element={
          <PageTransition>
            <SinharajaTour />
          </PageTransition>
        } />
        <Route path="/kanneliya-tour" element={
          <PageTransition>
            <KanneliyaTour />
          </PageTransition>
        } />
        <Route path="/koggala-tour" element={
          <PageTransition>
            <KoggalaTour />
          </PageTransition>
        } />
        <Route path="/about" element={
          <PageTransition>
            <About />
          </PageTransition>
        } />
        <Route path="/vision" element={
          <PageTransition>
            <Vision />
          </PageTransition>
        } />
        <Route path="/contact" element={
          <PageTransition>
            <Contact />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
