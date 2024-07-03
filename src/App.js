import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Styles/GlobalStyles";
import { theme } from "./Styles/Theme";
import Header from "./components/Header";
import About from "./components/About";
import WhatIDo from "./components/whatIDO";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Sidebar from "./components/Siderbar";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Navbar />
          <About />
          <WhatIDo />
          <Resume />
          <Portfolio />
          <Contact />
        </div>
      </div>
      <Contact />
    </ThemeProvider>
  );
};

export default App;
