import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Styles/GlobalStyles";
import { theme } from "./Styles/Theme";
import Header from "./components/Header";
// import About from "./components/About";
// import WhatIDo from "./components/whatIDO";
// import Resume from "./components/Resume";
// import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { Route,Routes } from "react-router-dom";
import Home from "./screens/Home";
// import Sidebar from "./components/Siderbar";
// import Navbar from "./components/Navbar";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/header" element={<Header/>} />
      </Routes>

      {/* <Header />
        <Sidebar />
          <Navbar />
          <About />
          <WhatIDo />
          <Resume />
          <Portfolio />
          <Contact /> */}
    </ThemeProvider>
  );
};

export default App;
