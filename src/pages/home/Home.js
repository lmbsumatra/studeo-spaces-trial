import React, { useEffect } from "react";
import "./style.css";
import Navigation from "../../components/Navigation";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  });

  return (
    <div className="home">
      <Navigation />

      <main class="grid-container grid-container--home">
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

        <div className="grid-container">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Home;