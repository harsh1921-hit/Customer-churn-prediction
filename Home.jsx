import React from "react";
import ChurnPredictionForm from "../ChurnPredictionForm/ChurnPredictionForm";
import "./Home.css"; // Importing separate CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Our Prediction Service</h1>
      <div className="home-content">
        <ChurnPredictionForm />
      </div>
    </div>
  );
};

export default Home;
