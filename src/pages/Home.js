import React, { useEffect } from "react";
import logo from "../assets/images/studeo-spaces-logo.png";
import "../../src/index.css";

const Home = () => {
  useEffect(() => {
    document.title = "Home";

    const nav = document.querySelector(".primary-navigation");
    const navToggle = document.querySelector(".mobile-nav-toggle");

    const toggleNav = () => {
      const visibility = nav.getAttribute("data-visible") === "true";
      nav.setAttribute("data-visible", !visibility);
      navToggle.setAttribute("aria-expanded", !visibility);
    };

    navToggle.addEventListener("click", toggleNav);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      navToggle.removeEventListener("click", toggleNav);
    };
  }, []);

  return (
    <div className="home">
      <header className="primary-header flex">
        <div>
          <img src={logo} alt="Studeo Spaces Logo" class="logo" />
        </div>

        <button
          className="mobile-nav-toggle"
          menu-toggled="false"
          aria-controls="primary-navigation"
        >
          <span className="sr-only" aria-expanded="true">
            Menu
          </span>
        </button>
        <nav className="flex">
          <ul
            id="primary-navigation"
            className="primary-navigation underline-indicators flex"
            style={{ "--gap": "" }}
            data-visible="false"
          >
            <li className="active">
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
      </header>

      <div class="grid-container grid-container--home">
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
