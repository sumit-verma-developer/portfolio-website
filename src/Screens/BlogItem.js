import React from "react";
import "../css/style.css";

function BlogItem() {
  return (
    <div>
      {/* <!-- Blog item --> */}
      <div className="blog-item padd-15">
        <div className="blog-item-inner">
          <div className="image">
            <img src="images/portfolio/portfolio-2.jpg" alt="" />
          </div>
          <div className="blog-info">
            <div className="category">
              <a href="#">
                <p>
                  <i className="fa-sharp fa-solid fa-book-open-reader"></i>{" "}
                  Category 02
                </p>
              </a>
            </div>
            <div className="date">
              <p>
                <i className="fa-solid fa-calendar-days"></i> 25 July, 1999
              </p>
            </div>
          </div>
          <a href="blog-single.html">
            <h4>Blog Title 02</h4>
          </a>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            pariatur consectetur doloremque.
          </p>
          <a href="blog-single.html">Read More...</a>
        </div>
      </div>
      {/* <!-- Blog item --> */}
      <div className="blog-item padd-15">
        <div className="blog-item-inner">
          <div className="image">
            <img src="images/portfolio/portfolio-3.jpg" alt="" />
          </div>
          <div className="blog-info">
            <div className="category">
              <a href="blog-single.html">
                <p>
                  <i className="fa-sharp fa-solid fa-book-open-reader"></i>{" "}
                  Category 03
                </p>
              </a>
            </div>
            <div className="date">
              <p>
                <i className="fa-solid fa-calendar-days"></i> 25 July, 1999
              </p>
            </div>
          </div>
          <a href="blog-single.html">
            <h4>Blog Title 03</h4>
          </a>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            pariatur consectetur doloremque.
          </p>
          <a href="blog-single.html">Read More...</a>
        </div>
      </div>
      {/* <!-- Blog item --> */}
      <div className="blog-item padd-15">
        <div className="blog-item-inner">
          <div className="image">
            <img src="images/portfolio/portfolio-4.jpg" alt="" />
          </div>
          <div className="blog-info">
            <div className="category">
              <a href="blog-single.html">
                <p>
                  <i className="fa-sharp fa-solid fa-book-open-reader"></i>{" "}
                  Category 04
                </p>
              </a>
            </div>
            <div className="date">
              <p>
                <i className="fa-solid fa-calendar-days"></i> 25 July, 1999
              </p>
            </div>
          </div>
          <a href="blog-single.html">
            <h4>Blog Title 04</h4>
          </a>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            pariatur consectetur doloremque.
          </p>
          <a href="#">Read More...</a>
        </div>
      </div>
      {/* <!-- Blog item --> */}
      <div className="blog-item padd-15">
        <div className="blog-item-inner">
          <div className="image">
            <img src="images/portfolio/portfolio-5.jpg" alt="" />
          </div>
          <div className="blog-info">
            <div className="category">
              <a href="blog-single.html">
                <p>
                  <i className="fa-sharp fa-solid fa-book-open-reader"></i>{" "}
                  Category 05
                </p>
              </a>
            </div>
            <div className="date">
              <p>
                <i className="fa-solid fa-calendar-days"></i> 25 July, 1999
              </p>
            </div>
          </div>
          <a href="blog-single.html">
            <h4>Blog Title 05</h4>
          </a>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            pariatur consectetur doloremque.
          </p>
          <a href="blog-single.html">Read More...</a>
        </div>
      </div>
      {/* <!-- Blog item --> */}
      <div className="blog-item padd-15">
        <div className="blog-item-inner">
          <div className="image">
            <img src="images/portfolio/portfolio-6.jpg" alt="" />
          </div>
          <div className="blog-info">
            <div className="category">
              <a href="blog-single.html">
                <p>
                  <i className="fa-sharp fa-solid fa-book-open-reader"></i>{" "}
                  Category 06
                </p>
              </a>
            </div>
            <div className="date">
              <p>
                <i className="fa-solid fa-calendar-days"></i> 25 July, 1999
              </p>
            </div>
          </div>
          <a href="blog-single.html">
            <h4>Blog Title 06</h4>
          </a>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            pariatur consectetur doloremque.
          </p>
          <a href="blog-single.html">Read More...</a>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
