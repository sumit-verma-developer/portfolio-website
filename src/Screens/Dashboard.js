import React from "react";
import Nav from "./Nav";
import "../css/style.css";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Blog from "./Blog";
import BlogItem from "./BlogItem";

export default function Dashboard() {
  const heroLogo = require("../images/hero.jpg");
  return (
    <div>
      <Nav />
      {/* <About/> */}
      {/* <Services /> */}
      {/* <Portfolio /> */}
      {/* <Contact /> */}
      <Blog />
      {/* <BlogItem /> */}
      {/* <div className="main-content">
        <section className="home active section" id="home">
          <div className="container">
            <div className="row">
              <div className="home-info padd-15">
                <h3 className="hello">
                  Hello, my name is <span className="name">sumit verma</span>
                </h3>
                <h3 className="my-profession">
                  I'm a <span className="typing">React native developer</span>
                </h3>
                <p>
                  I'm a React native developer with extensive experience for
                  over 3 years. My expertise is to create Mobile Application and
                  design website.
                </p>
                <a href="#" className="btn">
                  Download CV
                </a>
              </div>
              <div className="home-img padd-15">
                <img src={heroLogo} alt="hero" />
              </div>
            </div>
          </div>
        </section>
      </div> */}
    </div>
  );
}
