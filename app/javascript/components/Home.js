import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const buttonStyle = {
    marginTop: "10px",
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <section style={{ textAlign: "center" }}>
      <h1>Welcome to the random greeting app!</h1>
      <Link to="/greeting">
        <button style={buttonStyle}>Random Greeting</button>
      </Link>
    </section>
  );
};

export default Home;
