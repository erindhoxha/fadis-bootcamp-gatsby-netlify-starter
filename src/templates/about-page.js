import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div className="container about-page">
      <div className="columns">
        <div className="section">
          <h2 className="title is-size-3 has-text-weight-bold is-bold-light underline mb-6">
            {title}
          </h2>
          <PageContent className="content" content={content} />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.9297968061514!2d151.12838061564497!3d-33.865700080657064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a52661026bb1%3A0xc93b4f7bfb3254ef!Joey's&#39;s%20Bootcamp%20and%20Boxing!5e0!3m2!1sen!2sau!4v1669458023211!5m2!1sen!2sau"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          `
        </div>
      </div>
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
