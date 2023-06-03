import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Expreience from "./components/Expreience";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Home />
        <SocialLinks />
        <About />
        <Portfolio />
        <Expreience />
        <Contact />
      </div>
    </>
  );
}

export default App;
