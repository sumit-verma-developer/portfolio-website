import React from "react";
import "../css/style.css";
export default function Portfolio() {
  const portfolioImg1 = require("../images/portfolio/portfolio-1.jpg");
  const portfolioImg2 = require("../images/portfolio/portfolio-2.jpg");
  const portfolioImg3 = require("../images/portfolio/portfolio-3.jpg");
  const portfolioImg4 = require("../images/portfolio/portfolio-4.jpg");
  const portfolioImg5 = require("../images/portfolio/portfolio-5.jpg");
  const portfolioImg6 = require("../images/portfolio/portfolio-6.jpg");

  return (
    <div>
      {/* <!-- Portfolio Section Start --> */}
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-heading padd-15">
              <h2>My Last Projects :</h2>
            </div>
          </div>
          <div className="row">
            {/* <!-- Portfolio item --> */}
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-innner shadow-dark">
                <div className="portfolio-img">
                  <img src={portfolioImg1} alt="portfolio-1" />
                </div>
              </div>
            </div>
            {/* <!-- Portfolio item --> */}
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-innner shadow-dark">
                <div className="portfolio-img">
                  <img
                    // src="images/portfolio/portfolio-2.jpg"
                    src={portfolioImg2}
                    alt="portfolio-2"
                  />
                </div>
              </div>
            </div>
            {/* <!-- Portfolio item --> */}
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-innner shadow-dark">
                <div className="portfolio-img">
                  <img
                    src={portfolioImg3}
                    // src="images/portfolio/portfolio-3.jpg"
                    alt="portfolio-3"
                  />
                </div>
              </div>
            </div>
            {/* <!-- Portfolio item --> */}
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-innner shadow-dark">
                <div className="portfolio-img">
                  <img
                    // src="images/portfolio/portfolio-4.jpg"
                    src={portfolioImg4}
                    alt="portfolio-4"
                  />
                </div>
              </div>
            </div>
            {/* <!-- Portfolio item --> */}
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-innner shadow-dark">
                <div className="portfolio-img">
                  <img
                    src={portfolioImg5}
                    // src="images/portfolio/portfolio-5.jpg"
                    alt="portfolio-5"
                  />
                </div>
              </div>
            </div>
            {/* <!-- Portfolio item --> */}
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-innner shadow-dark">
                <div className="portfolio-img">
                  <img
                    src={portfolioImg6}
                    // src="images/portfolio/portfolio-6.jpg"
                    alt="portfolio-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Portfolio Section End --> */}
    </div>
  );
}
