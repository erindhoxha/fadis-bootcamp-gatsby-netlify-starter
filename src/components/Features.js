import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline features">
    {gridItems.map((item, index) => (
      <div key={item.text} className="column is-6">
        <section>
          <div className="">
            <div>
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <div className="index-box mt-4">
            <p className="index">{index + 1}.</p>
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
    }),
  ),
};

export default FeatureGrid;
