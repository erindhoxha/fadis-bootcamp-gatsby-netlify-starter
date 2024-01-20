import React from "react";
import Layout from "../../components/Layout";
import img from "../../img/fadis-logo-3.png";

// eslint-disable-next-line
export default () => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="content">
          <img src={img} style={{ maxWidth: "200px" }} />
          <h1
            className="title is-size-4 has-text-weight-bold is-bold-light"
            style={{ maxWidth: "800px" }}
          >
            Thank you for your interest to join Joey's Bootcamp & Boxing club!
          </h1>
          <p className="is-size-6 has-text-weight-regular">
            Our team will come back to you shortly.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);
