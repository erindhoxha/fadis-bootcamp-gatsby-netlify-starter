import * as React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="content">
          <div className="container">
            <div className="section">
              <div className="columns">
                <div className="column is-7 is-offset-1">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Testimonials
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
