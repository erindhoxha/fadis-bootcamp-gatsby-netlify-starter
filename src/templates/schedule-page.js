import * as React from "react";
import { graphql } from "gatsby";
import "../components/schedule.css";
import Layout from "../components/Layout";
import PropTypes from "prop-types";
import { HTMLContent } from "../components/Content";

const BOXING_TECHNIQUE = "Boxing Technique";
const HIIT_BOXING = "HIIT Boxing";
const HIIT_CIRCUIT = "HIIT Circuit";
const HIIT = "HIIT";

const SchedulePageTemplate = ({ title, content, contentComponent }) => {
  return (
    <div className="schedule-page">
      <div className="container">
        <div className="px-3">
          <div
            style={{
              width: "100%",
            }}
          >
            <h2 className="title title-center is-size-3 has-text-weight-bold is-bold-light underline mb-6">
              {title}
            </h2>
            <section
              style={{
                paddingTop: "0px",
                paddingLeft: "0px",
                paddingRight: "0px",
              }}
            >
              <div>
                <div className="mobile-table">
                  <h4>Monday</h4>
                  <div className="hiit-am-1 rounded p-2 mt-1">
                    <span className="block mb-0">Morning class | 5:20am</span>
                    <p>{HIIT_BOXING}</p>
                  </div>
                  <div className="hiit-am-2 rounded mt-1 p-2">
                    <span className="block mb-0">Morning class | 6:20am</span>
                    <span></span>
                    <p>{HIIT_BOXING}</p>
                  </div>
                  <div className="hiit-pm-1 rounded mt-1 p-2">
                    <span className="block mb-0">Evening class | 6:00pm</span>
                    <p>{HIIT_BOXING}</p>
                  </div>
                  <div className="hiit-pm-2 rounded p-2 mt-1">
                    <span className="block mb-0">Evening class | 7:00pm</span>
                    <p>{BOXING_TECHNIQUE}</p>
                  </div>
                </div>
                <div className="mobile-table">
                  <h4 className="mt-5">Tuesday</h4>
                  <div className="hiit-orange rounded p-2 mt-1">
                    <span className="block mb-0">Evening class | 6:30pm</span>
                    <p>{HIIT_BOXING}</p>
                  </div>
                </div>
                <div className="mobile-table">
                  <h4 className="mt-5">Wednesday</h4>
                  <div className="hiit-am-1 rounded p-2 mt-1">
                    <span className="block mb-0">Morning class | 5:20am</span>
                    <p>{HIIT_CIRCUIT}</p>
                  </div>
                  <div className="hiit-am-2 rounded mt-1 p-2">
                    <span className="block mb-0">Morning class | 6:20am</span>
                    <p>{HIIT_CIRCUIT}</p>
                  </div>
                  <div className="hiit-pm-1 rounded mt-1 p-2">
                    <span className="block mb-0">Evening class | 6:20pm</span>
                    <p>{HIIT_CIRCUIT}</p>
                  </div>
                  <div className="hiit-pm-2 rounded p-2 mt-1">
                    <span className="block mb-0">Evening class | 7:00pm</span>
                    <p>{HIIT_CIRCUIT}</p>
                  </div>
                </div>
                <div className="mobile-table">
                  <h4 className="mt-5">Thursday</h4>
                  <div className="hiit-orange rounded p-2 mt-1">
                    <span className="block mb-0">Evening class | 6:30pm</span>
                    <p>{HIIT_CIRCUIT}</p>
                  </div>
                </div>
                <div className="mobile-table">
                  <h4 className="mt-5">Friday</h4>
                  <div className="hiit-am-1 rounded p-2 mt-1">
                    <span className="block mb-0">Morning class | 5:20am</span>
                    <p>Strength</p>
                  </div>
                  <div className="hiit-am-2 rounded mt-1 p-2">
                    <span className="block mb-0">Morning class | 6:20am</span>
                    <p>{HIIT}</p>
                  </div>
                  <div className="hiit-pm-1 rounded mt-1 p-2">
                    <span className="block mb-0">Evening class | 6:20pm</span>
                    <p>{HIIT_BOXING}</p>
                  </div>
                  <div className="hiit-pm-2 rounded p-2 mt-1">
                    <span className="block mb-0">Evening class | 7:00pm</span>
                    <p>Strength</p>
                  </div>
                </div>
                <div className="mobile-table">
                  <h4 className="mt-5">Saturday</h4>
                  <div className="hiit-orange rounded p-2 mt-1">
                    <span className="block mb-0">Morning class | 8:30am</span>
                    <p>{HIIT_BOXING}</p>
                  </div>
                </div>
                <div className="table table-desktop">
                  <div className="table-row">
                    <div className="table-head">Monday</div>
                    <div className="table-head">Tuesday</div>
                    <div className="table-head">Wednesday</div>
                    <div className="table-head">Thursday</div>
                    <div className="table-head">Friday</div>
                    <div className="table-head">Saturday</div>
                    <div className="table-head">Sunday</div>
                  </div>
                  <div className="table-row">
                    <div className="table-cell hiit-am-1">
                      <span>5:20am</span>
                      <p>{HIIT_BOXING}</p>
                    </div>
                    <div className="table-cell"></div>
                    <div className="table-cell hiit-am-1">
                      <span>5:20am</span>
                      <p>{HIIT_CIRCUIT}</p>
                    </div>
                    <div className="table-cell"></div>
                    <div className="table-cell hiit-am-1">
                      <span>5:20am</span>
                      <p>Strength</p>
                    </div>
                    <div className="table-cell"></div>
                    <div className="table-cell"></div>
                  </div>
                  <div className="table-row">
                    <div className="table-cell hiit-am-2">
                      <span>6:20am</span>
                      <p>{HIIT_BOXING}</p>
                    </div>
                    <div className="table-cell"></div>
                    <div className="table-cell hiit-am-2">
                      <span>6:20am</span>
                      <p>{HIIT_CIRCUIT}</p>
                    </div>
                    <div className="table-cell"></div>
                    <div className="table-cell hiit-am-2">
                      <span>6:20am</span>
                      <p>{HIIT}</p>
                    </div>
                    <div className="table-cell"></div>
                    <div className="table-cell"></div>
                  </div>
                  <div className="table-row">
                    <div className="table-cell"></div>
                    <div className="table-cell"></div>
                    <div className="table-cell"></div>
                    <div className="table-cell"></div>
                    <div className="table-cell"></div>
                    <div className="table-cell"></div>
                    <div className="table-cell"></div>
                  </div>
                  <div className="table-row">
                    <div className="table-cell"></div>
                    <div className="table-cell"></div>
                    <div className="table-cell"></div>
                    <div className="table-cell"></div>
                    <div className="table-cell"></div>
                    <div className="table-cell hiit-orange">
                      <span>8:30am</span>
                      <p>{HIIT_BOXING}</p>
                    </div>
                    <div className="table-cell"></div>
                  </div>
                  <div className="table-row">
                    <div className="table-cell"></div>
                    <div className="table-cell"></div>
                    <div className="table-cell"></div>
                    <div className="table-cell"></div>
                    <div className="table-cell"></div>
                    <div className="table-cell"></div>
                    <div className="table-cell"></div>
                  </div>
                  <div className="table-row">
                    <div className="table-cell"></div>
                    <div className="table-cell"></div>
                    <div className="table-cell"></div>
                    <div className="table-cell"></div>
                    <div className="table-cell"></div>
                    <div className="table-cell"></div>
                    <div className="table-cell"></div>
                  </div>
                  <div className="table-row">
                    <div className="table-cell"></div>
                    <div className="table-cell"></div>
                    <div className="table-cell"></div>
                    <div className="table-cell"></div>
                    <div className="table-cell"></div>
                    <div className="table-cell"></div>
                    <div className="table-cell"></div>
                  </div>
                  <div className="table-row">
                    <div className="table-cell hiit-pm-1">
                      <span>6:00pm</span>
                      <p>{HIIT_BOXING}</p>
                    </div>
                    <div className="table-cell hiit-orange">
                      <span>6:30pm</span>
                      <p>{HIIT_BOXING}</p>
                    </div>
                    <div className="table-cell hiit-pm-1">
                      <span>6:00pm</span>
                      <p>{HIIT_CIRCUIT}</p>
                    </div>
                    <div className="table-cell hiit-orange">
                      <span>6:30pm</span>
                      <p>{HIIT_CIRCUIT}</p>
                    </div>
                    <div className="table-cell hiit-pm-1">
                      <span>6:00pm</span>
                      <p>{HIIT_BOXING}</p>
                    </div>
                    <div className="table-cell"></div>
                    <div className="table-cell"></div>
                  </div>
                  <div className="table-row">
                    <div className="table-cell hiit-pm-2">
                      <span>7:00pm</span>
                      <p>{BOXING_TECHNIQUE}</p>
                    </div>
                    <div className="table-cell"></div>
                    <div className="table-cell hiit-pm-2">
                      <span>7:00pm</span>
                      <p>{HIIT_CIRCUIT}</p>
                    </div>
                    <div className="table-cell"></div>
                    <div className="table-cell hiit-pm-2">
                      <span>7:00pm</span>
                      <p>Strength</p>
                    </div>
                    <div className="table-cell"></div>
                    <div className="table-cell"></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="section">
          {/* <h2 className="title is-size-3 has-text-weight-bold is-bold-light underline mb-6">
            {title}
          </h2> */}
        </div>
      </div>
    </div>
  );
};

SchedulePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
};

const SchedulePage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <SchedulePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

SchedulePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SchedulePage;

export const schedulePageQuery = graphql`
  query SchedulePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        monday {
          name
          time
        }
        tuesday {
          name
          time
        }
        wednesday {
          name
          time
        }
        thursday {
          name
          time
        }
        friday {
          name
          time
        }
        saturday {
          name
          time
        }
        sunday {
          name
          time
        }
      }
    }
  }
`;
