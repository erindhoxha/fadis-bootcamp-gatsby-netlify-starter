import * as React from 'react';
import { graphql } from 'gatsby';
import '../components/schedule.css';
import Layout from '../components/Layout';
import PropTypes from 'prop-types';

const BOXING_TECHNIQUE = 'Boxing Technique';
const HIIT_BOXING = 'HIIT Boxing';
const HIIT_CIRCUIT = 'HIIT Circuit';
const HIIT = 'HIIT';

const SchedulePageTemplate = ({ data }) => {
  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="section">
            <h2 className="title is-size-3 has-text-weight-bold is-bold-light underline mb-6">
              {data.markdownRemark.frontmatter.title}
            </h2>
            <section
              className="section"
              style={{
                paddingTop: '0px',
                paddingLeft: '0px',
                paddingRight: '0px',
              }}
            >
              <div className="content">
                <div className="mobile-table">
                  <h4>Monday</h4>
                  <p className="mb-0 mt-4 has-text-weight-medium">Morning</p>
                  <div className="hiit-am-1 rounded p-2">
                    <span>5:20am</span>
                    <p>{HIIT_BOXING}</p>
                  </div>
                  <div className="hiit-am-2 rounded mt-2 p-2">
                    <span>6:20am</span>
                    <p>{HIIT_BOXING}</p>
                  </div>
                  <p className="mb-0 mt-4 has-text-weight-medium">Afternoon</p>
                  <div className="hiit-pm-1 rounded p-2">
                    <span>6:00pm</span>
                    <p>{HIIT_BOXING}</p>
                  </div>
                  <div className="hiit-pm-2 rounded p-2 mt-2">
                    <span>7:00pm</span>
                    <p>{BOXING_TECHNIQUE}</p>
                  </div>
                </div>
                <div className="mobile-table">
                  <h4 className="mt-5">Tuesday</h4>
                  <p className="mb-0 mt-4 has-text-weight-medium">Afternoon</p>
                  <div className="hiit-orange rounded p-2 mt-2">
                    <span>6:30pm</span>
                    <p>{HIIT_BOXING}</p>
                  </div>
                </div>
                <div className="mobile-table">
                  <h4 className="mt-5">Wednesday</h4>
                  <p className="mb-0 mt-4 has-text-weight-medium">Morning</p>
                  <div className="hiit-am-1 rounded p-2">
                    <span>5:20am</span>
                    <p>{HIIT_CIRCUIT}</p>
                  </div>
                  <div className="hiit-am-2 rounded mt-2 p-2">
                    <span>6:20am</span>
                    <p>{HIIT_CIRCUIT}</p>
                  </div>
                  <p className="mb-0 mt-4 has-text-weight-medium">Afternoon</p>
                  <div className="hiit-pm-1 rounded p-2">
                    <span>6:00pm</span>
                    <p>{HIIT_CIRCUIT}</p>
                  </div>
                  <div className="hiit-pm-2 rounded p-2 mt-2">
                    <span>7:00pm</span>
                    <p>{HIIT_CIRCUIT}</p>
                  </div>
                </div>
                <div className="mobile-table">
                  <h4 className="mt-5">Thursday</h4>
                  <p className="mb-0 mt-4 has-text-weight-medium">Afternoon</p>
                  <div className="hiit-orange rounded p-2 mt-2">
                    <span>6:30pm</span>
                    <p>{HIIT_CIRCUIT}</p>
                  </div>
                </div>
                <div className="mobile-table">
                  <h4 className="mt-5">Friday</h4>
                  <p className="mb-0 mt-4 has-text-weight-medium">Morning</p>
                  <div className="hiit-am-1 rounded p-2">
                    <span>5:20am</span>
                    <p>Strength</p>
                  </div>
                  <div className="hiit-am-2 rounded mt-2 p-2">
                    <span>6:20am</span>
                    <p>{HIIT}</p>
                  </div>
                  <p className="mb-0 mt-4 has-text-weight-medium">Afternoon</p>
                  <div className="hiit-pm-1 rounded p-2">
                    <span>6:00pm</span>
                    <p>{HIIT_BOXING}</p>
                  </div>
                  <div className="hiit-pm-2 rounded p-2 mt-2">
                    <span>7:00pm</span>
                    <p>Strength</p>
                  </div>
                </div>
                <div className="mobile-table">
                  <h4 className="mt-5">Saturday</h4>
                  <p className="mb-0 mt-4 has-text-weight-medium">Afternoon</p>
                  <div className="hiit-orange rounded p-2 mt-2">
                    <span>8:30am</span>
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
    </Layout>
  );
};

SchedulePageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SchedulePageTemplate;

export const schedulePageQuery = graphql`
  query SchedulePageTemplate($id: String!) {
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
