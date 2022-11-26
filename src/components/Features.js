import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item, index) => (
      <div key={item.text} className="column is-6">
        <section>
          <div className="has-text-centered">
            <div
              style={{
                minHeight: "200px",
                width: "140px",
                marginBottom: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <div className="index-box">
            <p className="index">{index + 1}</p>
            <p>{item.text}</p>
          </div>
        </section>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
