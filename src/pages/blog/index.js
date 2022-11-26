import * as React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <div className="columns">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                Testimonials
              </h2>
              <section
                className="section"
                style={{
                  paddingTop: "0px",
                  paddingLeft: "0px",
                  paddingRight: "0px",
                }}
              >
                <div className="content">
                  <BlogRoll />
                </div>
              </section>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
