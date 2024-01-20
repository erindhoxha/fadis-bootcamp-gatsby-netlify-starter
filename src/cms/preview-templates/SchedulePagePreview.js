import React from "react";
import PropTypes from "prop-types";
import { SchedulePageTemplate } from "../../templates/schedule-page";

const SchedulePagePreview = ({ entry }) => (
  <SchedulePageTemplate title={entry.getIn(["data", "title"])} />
);

SchedulePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default SchedulePagePreview;
