import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Main page components
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Portfolio } from "./components/sections/Portfolio";
import { Skills } from "./components/sections/Skills";
import { Services } from "./components/sections/Services";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/Footer";

// New about page
import AboutPage from "./pages/AboutPage";

import './App.css'
import './index.css'

function MainPage({ isLoaded, setIsLoaded, menuOpen, setMenuOpen }) {
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
          } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              isLoaded={isLoaded}
              setIsLoaded={setIsLoaded}
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
            />
          }
        />
        <Route
          path="/about"
          element={
            <AboutPage
              isLoaded={isLoaded}
              setIsLoaded={setIsLoaded}
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
