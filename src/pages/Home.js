import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div>
      <header className="primary-header">
        <nav>
          <ul
            className="primary-navigation underline-indicators flex"
            style={{ "--gap": "4rem" }}
          >
            <li className="active">
              <a href="#" className="uppercase text-white letter-spacing-2">
                <span>00</span>Home
              </a>
            </li>
            <li>
              <a href="#" className="uppercase text-white letter-spacing-2">
                <span>01</span>This
              </a>
            </li>
            <li>
              <a href="#" className="uppercase text-white letter-spacing-2">
                <span>02</span>is
              </a>
            </li>
            <li>
              <a href="#" className="uppercase text-white letter-spacing-2">
                <span>03</span>Nav
              </a>
            </li>
          </ul>
        </nav>
      </header>
      So, you want to travel to Space Let's face
      it; if you want to go to space, you might as well genuinely go to out
      space an not hover kind of on the edge of it. Well it back, and relax
      because w'ell give you a truly out of this world experience! Explore
    </div>
  );
};

export default Home;
