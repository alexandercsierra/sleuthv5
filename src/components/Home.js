import React from "react";
import { Link } from "react-router-dom";
// import { Button } from "../styling/styled-components";
import { Button } from "reactstrap";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Sleuth</h1>
      <p>Start a new game?</p>
      <Link to="/addguests">
        <Button>Start</Button>
      </Link>
    </div>
  );
};

export default Home;
