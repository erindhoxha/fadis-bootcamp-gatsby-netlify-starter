import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  cta,
  ctaLink,
  description,
  intro,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <>
      <FullWidthImage img={heroImage} title={title} subheading={subheading} />
      <div className="container">
        <div className="columns p-4">
          <div>
            <div className="content">
              <div className="cta">
                <button className="button is-primary">{cta}</button>
              </div>
              <div className="content">
                <div className="tile">
                  <h1 className="title underline">{mainpitch.title}</h1>
                </div>
              </div>
              <Features gridItems={intro.blurbs} />
              {/* <div className="column is-12 mt-6"> */}
              {/* Success stories */}
              {/* <h3 className="is-size-3 title underline mb-6">{heading}</h3> */}
              {/* <BlogRoll /> */}
              {/* <div className="column is-12 has-text-centered">
                  <Link className="btn" to="/blog">
                    Read more
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  cta: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        cta={frontmatter.cta}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        cta
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 500
                  height: 300
                  quality: 64
                  layout: CONSTRAINED
                )
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
