import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomGreeting } from "../redux/greetings.js";
import { Link } from "react-router-dom";

function Greeting() {
  const greeting = useSelector((state) => state.greetings.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomGreeting());
  }, [dispatch]);

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <section>
      <h1>Random Greeting</h1>
      {greeting && <h3>Your random greeting is: {greeting}</h3>}
      <Link to="/">
        <button style={buttonStyle}>Back to Home</button>
      </Link>
    </section>
  );
}

export default Greeting;
