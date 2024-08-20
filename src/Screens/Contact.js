import React from "react";
import "../css/style.css";

export default function Contact() {
  return (
    <div>
      {/* <!-- Contact Section Start --> */}
      <section className="contact section" id="contact">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Contact Me</h2>
            </div>
          </div>
          <h3 className="contact-title padd-15">Do You Have Any Questions?</h3>
          <h4 className="contact-sub-title padd-15">I'M AT YOUR SERVICE</h4>
          <div className="row">
            {/* <!-- Contact info item--> */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-phone"></i>
              </div>
              <h4>Call Us On</h4>
              <p>+880 1234567890</p>
            </div>
            {/* <!-- Contact info item--> */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-map-marker-alt"></i>
              </div>
              <h4>Office</h4>
              <p>Dhaka</p>
            </div>
            {/* <!-- Contact info item--> */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-envelope"></i>
              </div>
              <h4>Email</h4>
              <p>info@gmail.com</p>
            </div>
            {/* <!-- Contact info item--> */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-globe-europe"></i>
              </div>
              <h4>Website</h4>
              <p>www.domain.com</p>
            </div>
          </div>
          <h3 className="contact-title padd-15">SEND ME AN EMAIL</h3>
          <h4 className="contact-sub-title padd-15">
            I'M VERY RESPONSIVE TO MESSAGES
          </h4>
          {/* <!-- Contact form --> */}
          <div className="row">
            <div className="contact-form padd-15">
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <button type="submit" className="btn">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Contact Section End -- */}
    </div>
  );
}
