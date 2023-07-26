import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="home" >
        <div className="headerContainer">
          <h1>Home</h1>
        </div>
      </div>
    </Layout>
  );
};

export default Home;