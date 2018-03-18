import React, { Component } from "react";

import HomeScreen from "./components/HomeScreen";
import Projects from "./components/Projects";
import SkillsSet from "./components/SkillsSet";
import SkillSet from "./components/SkillSet";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Name from "./components/Name";

// Styles CSS
import "./styles/mobile.css";
import "./styles/betweenMobileTablet.css";
import "./styles/tablet.css";
import "./styles/medium.css";
import "./styles/desktop.css";
import "./styles/monitor.css";
import "./styles/styles.css";

import "./styles/styles.css";
import "./styles/desktop.css";

class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <HomeScreen />
        <Name />
        <Navbar />
        <AboutMe />
        <SkillsSet />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default Home;
