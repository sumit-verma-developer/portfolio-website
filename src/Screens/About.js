import React from "react";
import "../css/style.css";

export default function About() {
  return (
    <div>
      {/* <!-- About Section Start --> */}
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h3>
                    I'm Sumit Verma and <span>React Native Developer</span>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, itaque? Excepturi doloribus perferendis rerum ipsum
                    aperiam aspernatur mollitia vel tenetur in adipisci quidem
                    reprehenderit consequatur eveniet earum quod, a pariatur.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    {/* <div className="info-item padd-15">
                      <p>
                        Birthday : <span>10 may 1997</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Age : <span>28</span>
                      </p>
                    </div> */}
                    <div className="info-item padd-15">
                      <p>
                        Website : <span>www.wealthzi.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>sumitvermaofficial1@gmail.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>B.tech(CS)</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+91 9565834003</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>gurugram</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Freelance : <span>Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a href="#" className="btn">
                        Download CV
                      </a>
                      <a href="#contact" className="btn hire-me">
                        Hire Me
                      </a>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skills-item padd-15">
                      <h5>HTML</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{ width: "95%" }}
                        ></div>
                        <div className="skill-percent">95%</div>
                      </div>
                    </div>
                    <div className="skills-item padd-15">
                      <h5>CSS</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{ width: "75%" }}
                        ></div>
                        <div className="skill-percent">75%</div>
                      </div>
                    </div>
                    <div className="skills-item padd-15">
                      <h5>JS</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{ width: "65%" }}
                        ></div>
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skills-item padd-15">
                      <h5>PHP</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{ width: "80%" }}
                        ></div>
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* <!-- Timeline item --> */}
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2013 - 2015
                          </h3>
                          <h4 className="timeline-title">
                            Master in Computer Science
                          </h4>
                          <p className="timeline-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Culpa eius sit praesentium labore perspiciatis
                            deleniti et nobis alias quas nulla.
                          </p>
                        </div>
                        {/* <!-- Timeline item --> */}
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2013 - 2015
                          </h3>
                          <h4 className="timeline-title">
                            Master in Computer Science
                          </h4>
                          <p className="timeline-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Culpa eius sit praesentium labore perspiciatis
                            deleniti et nobis alias quas nulla.
                          </p>
                        </div>
                        {/* <!-- Timeline item --> */}
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2013 - 2015
                          </h3>
                          <h4 className="timeline-title">
                            Master in Computer Science
                          </h4>
                          <p className="timeline-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Culpa eius sit praesentium labore perspiciatis
                            deleniti et nobis alias quas nulla.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* <!-- Timeline item --> */}
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2013 - 2015
                          </h3>
                          <h4 className="timeline-title">
                            Master in Computer Science
                          </h4>
                          <p className="timeline-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Culpa eius sit praesentium labore perspiciatis
                            deleniti et nobis alias quas nulla.
                          </p>
                        </div>
                        {/* <!-- Timeline item --> */}
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2013 - 2015
                          </h3>
                          <h4 className="timeline-title">
                            Master in Computer Science
                          </h4>
                          <p className="timeline-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Culpa eius sit praesentium labore perspiciatis
                            deleniti et nobis alias quas nulla.
                          </p>
                        </div>
                        {/* <!-- Timeline item --> */}
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2013 - 2015
                          </h3>
                          <h4 className="timeline-title">
                            Master in Computer Science
                          </h4>
                          <p className="timeline-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Culpa eius sit praesentium labore perspiciatis
                            deleniti et nobis alias quas nulla.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- About Section End --> */}
    </div>
  );
}
