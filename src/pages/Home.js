import React, { useEffect } from "react";
import logo from "../assets/images/studeo-spaces-logo.png";
import "../../src/index.css";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div>
      {/* <header className="primary-header flex">
        <div>
          <img src={logo} alt="Studeo Spaces Logo" class="logo" />
        </div>
        <nav className="flex">
          <ul
            className="primary-navigation underline-indicators flex"
            style={{ "--gap": "4rem", border: "1px solid red" }}
          >
            <li className="active" style={{ border: "1px solid yellow" }}>
              <a
                href="#"
                className="ff-sans-cond uppercase text-white letter-spacing-2"
              >
                <span>00</span>Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="ff-sans-cond uppercase text-white letter-spacing-2"
              >
                <span>01</span>Blogs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="ff-sans-cond uppercase text-white letter-spacing-2"
              >
                <span>02</span>Services
              </a>
            </li>
            <li>
              <a href="#" className="uppercase text-white letter-spacing-2">
                <span>03</span>FAQs
              </a>
            </li>
            <li>
              <a href="#" className="uppercase text-white letter-spacing-2">
                <span>04</span>Book Now
              </a>
            </li>
          </ul>
        </nav>
      </header> */}

      <div class="grid-container">
        <div>
          <h1 class="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
            So, you want to travel to
            <span class="d-block fs-900 ff-serif text-white">Space</span>
          </h1>

          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div>
          <a
            href="#"
            class="large-button uppercase ff-serif text-dark bg-white"
          >
            Explore
          </a>
        </div>
      </div>

    </div>
  );
};

export default Home;
