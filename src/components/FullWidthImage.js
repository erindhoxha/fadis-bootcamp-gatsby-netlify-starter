import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export default function FullWidthImage(props) {
  const {
    height = "100%",
    img,
    title,
    subheading,
    imgPosition = "top",
  } = props;

  return (
    <div
      className="margin-top-0 header-img"
      style={{
        display: "grid",
        maxHeight: "700px",
        alignItems: "center",
        position: "relative",
      }}
    >
      {img?.url ? (
        <img
          src={img}
          objectFit={"cover"}
          objectPosition={imgPosition}
          style={{
            gridArea: "1/1",
            // You can set a maximum height for the image, if you wish.
            height: height,
            width: "100%",
          }}
          // You can optionally force an aspect ratio for the generated image
          aspectratio={3 / 1}
          // This is a presentational image, so the alt should be an empty string
          alt=""
        />
      ) : (
        <GatsbyImage
          image={img}
          objectFit={"cover"}
          objectPosition={imgPosition}
          imgStyle={{ position: "static" }}
          style={{
            gridArea: "1/1",
            // You can set a maximum height for the image, if you wish.
            maxHeight: "100%",
            height: "100%",
          }}
          layout="fullWidth"
          // You can optionally force an aspect ratio for the generated image
          aspectratio={3 / 1}
          // This is a presentational image, so the alt should be an empty string
          alt=""
          formats={["auto", "webp", "avif"]}
        />
      )}
      {(title || subheading) && (
        <div
          style={{
            // By using the same grid area for both, they are stacked on top of each other
            gridArea: "1/1",
            padding: "24px",
            position: "relative",
            // This centers the other elements inside the hero component
            placeItems: "center",
            display: "grid",
            zIndex: 3,
          }}
        >
          {/* Any content here will be centered in the component */}
          {title && (
            <h1
              className="has-text-weight-bold is-size-3-mobile is-size-3-tablet is-size-1-widescreen has-text-centered"
              style={{
                color: "white",
                lineHeight: "1",
                padding: "0.25em",
                textAlign: "center",
              }}
            >
              {title}
            </h1>
          )}
          {subheading && (
            <h4
              className="has-text-weight-regular has-text-centered is-size-6-mobile is-size-6-tablet is-size-6-widescreen"
              style={{
                color: "white",
                lineHeight: "1.4",
                padding: "0.25rem",
                marginTop: "0.25rem",
                maxWidth: "700px",
              }}
            >
              {subheading}
            </h4>
          )}
          <div
            className="flex cta-btns mt-5"
            style={{
              gap: "12px",
            }}
          >
            <Link to="/schedule" className="button is-secondary">
              View schedule
            </Link>
            <Link to="/contact" className="button is-primary">
              Book in for your free class
            </Link>
          </div>

          <a
            style={{
              color: "white",
              marginTop: "24px",
              textDecoration: "underline",
              fontSize: "14px",
            }}
          >
            155 Great N Rd, Five Dock NSW 2046
          </a>
        </div>
      )}
      <div className="overlay"></div>
    </div>
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};
