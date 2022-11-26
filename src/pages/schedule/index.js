import PropTypes from "prop-types";
import * as React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import "../../components/schedule.css";
const index = (props) => {
  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="section">
            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
              Schedule
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
                <div className="mobile-table">
                  <h4>Monday</h4>
                  <p className="mb-0 mt-4 has-text-weight-medium">Morning</p>
                  <div class="hiit-am-1 rounded p-2">
                    <span>5:20am</span>
                    <p>HITT Boxing</p>
                  </div>
                  <div class="hiit-am-2 rounded mt-2 p-2">
                    <span>6:20am</span>
                    <p>HITT Boxing</p>
                  </div>
                  <p className="mb-0 mt-4 has-text-weight-medium">Afternoon</p>
                  <div class="hiit-pm-1 rounded p-2">
                    <span>6:00pm</span>
                    <p>HITT Boxing</p>
                  </div>
                  <div class="hiit-pm-2 rounded p-2 mt-2">
                    <span>7:00pm</span>
                    <p>HITT Boxing</p>
                  </div>
                </div>
                <div className="mobile-table">
                  <h4 className="mt-5">Tuesday</h4>
                  <p className="mb-0 mt-4 has-text-weight-medium">Afternoon</p>
                  <div class="hiit-orange rounded p-2 mt-2">
                    <span>6:30pm</span>
                    <p>HITT Boxing</p>
                  </div>
                </div>
                <div className="mobile-table">
                  <h4 className="mt-5">Wednesday</h4>
                  <p className="mb-0 mt-4 has-text-weight-medium">Morning</p>
                  <div class="hiit-am-1 rounded p-2">
                    <span>5:20am</span>
                    <p>HITT Circuit</p>
                  </div>
                  <div class="hiit-am-2 rounded mt-2 p-2">
                    <span>6:20am</span>
                    <p>HITT Circuit</p>
                  </div>
                  <p className="mb-0 mt-4 has-text-weight-medium">Afternoon</p>
                  <div class="hiit-pm-1 rounded p-2">
                    <span>6:00pm</span>
                    <p>HITT Circuit</p>
                  </div>
                  <div class="hiit-pm-2 rounded p-2 mt-2">
                    <span>7:00pm</span>
                    <p>HITT Circuit</p>
                  </div>
                </div>
                <div className="mobile-table">
                  <h4 className="mt-5">Thursday</h4>
                  <p className="mb-0 mt-4 has-text-weight-medium">Afternoon</p>
                  <div class="hiit-orange rounded p-2 mt-2">
                    <span>6:30pm</span>
                    <p>HITT Circuit</p>
                  </div>
                </div>
                <div className="mobile-table">
                  <h4 className="mt-5">Friday</h4>
                  <p className="mb-0 mt-4 has-text-weight-medium">Morning</p>
                  <div class="hiit-am-1 rounded p-2">
                    <span>5:20am</span>
                    <p>HITT</p>
                  </div>
                  <div class="hiit-am-2 rounded mt-2 p-2">
                    <span>6:20am</span>
                    <p>HITT</p>
                  </div>
                  <p className="mb-0 mt-4 has-text-weight-medium">Afternoon</p>
                  <div class="hiit-pm-1 rounded p-2">
                    <span>6:00pm</span>
                    <p>HITT</p>
                  </div>
                  <div class="hiit-pm-2 rounded p-2 mt-2">
                    <span>7:00pm</span>
                    <p>HITT</p>
                  </div>
                </div>
                <div className="mobile-table">
                  <h4 className="mt-5">Saturday</h4>
                  <p className="mb-0 mt-4 has-text-weight-medium">Afternoon</p>
                  <div class="hiit-orange rounded p-2 mt-2">
                    <span>8:30am</span>
                    <p>HITT Boxing</p>
                  </div>
                </div>
                <div class="table table-desktop">
                  <div class="table-row">
                    <div class="table-head">Monday</div>
                    <div class="table-head">Tuesday</div>
                    <div class="table-head">Wednesday</div>
                    <div class="table-head">Thursday</div>
                    <div class="table-head">Friday</div>
                    <div class="table-head">Saturday</div>
                    <div class="table-head">Sunday</div>
                  </div>
                  <div class="table-row">
                    <div class="table-cell hiit-am-1">
                      <span>5:20am</span>
                      <p>HITT Boxing</p>
                    </div>
                    <div class="table-cell"></div>
                    <div class="table-cell hiit-am-1">
                      <span>5:20am</span>
                      <p>HITT Circuit</p>
                    </div>
                    <div class="table-cell"></div>
                    <div class="table-cell hiit-am-1">
                      <span>5:20am</span>
                      <p>HITT</p>
                    </div>
                    <div class="table-cell"></div>
                    <div class="table-cell"></div>
                  </div>
                  <div class="table-row">
                    <div class="table-cell hiit-am-2">
                      <span>6:20am</span>
                      <p>HITT Boxing</p>
                    </div>
                    <div class="table-cell"></div>
                    <div class="table-cell hiit-am-2">
                      <span>6:20am</span>
                      <p>HITT Circuit</p>
                    </div>
                    <div class="table-cell"></div>
                    <div class="table-cell hiit-am-2">
                      <span>6:20am</span>
                      <p>HITT</p>
                    </div>
                    <div class="table-cell"></div>
                    <div class="table-cell"></div>
                  </div>
                  <div class="table-row">
                    <div class="table-cell"></div>
                    <div class="table-cell"></div>
                    <div class="table-cell"></div>
                    <div class="table-cell"></div>
                    <div class="table-cell"></div>
                    <div class="table-cell"></div>
                    <div class="table-cell"></div>
                  </div>
                  <div class="table-row">
                    <div class="table-cell"></div>
                    <div class="table-cell"></div>
                    <div class="table-cell"></div>
                    <div class="table-cell"></div>
                    <div class="table-cell"></div>
                    <div class="table-cell hiit-orange">
                      <span>8:30am</span>
                      <p>HITT Boxing</p>
                    </div>
                    <div class="table-cell"></div>
                  </div>
                  <div class="table-row">
                    <div class="table-cell"></div>
                    <div class="table-cell"></div>
                    <div class="table-cell"></div>
                    <div class="table-cell"></div>
                    <div class="table-cell"></div>
                    <div class="table-cell"></div>
                    <div class="table-cell"></div>
                  </div>
                  <div class="table-row">
                    <div class="table-cell"></div>
                    <div class="table-cell"></div>
                    <div class="table-cell"></div>
                    <div class="table-cell"></div>
                    <div class="table-cell"></div>
                    <div class="table-cell"></div>
                    <div class="table-cell"></div>
                  </div>
                  <div class="table-row">
                    <div class="table-cell"></div>
                    <div class="table-cell"></div>
                    <div class="table-cell"></div>
                    <div class="table-cell"></div>
                    <div class="table-cell"></div>
                    <div class="table-cell"></div>
                    <div class="table-cell"></div>
                  </div>
                  <div class="table-row">
                    <div class="table-cell hiit-pm-1">
                      <span>6:00pm</span>
                      <p>HITT Boxing</p>
                    </div>
                    <div class="table-cell hiit-orange">
                      <span>6:30pm</span>
                      <p>HITT Boxing</p>
                    </div>
                    <div class="table-cell hiit-pm-1">
                      <span>6:00pm</span>
                      <p>HITT Circuit</p>
                    </div>
                    <div class="table-cell hiit-orange">
                      <span>6:30pm</span>
                      <p>HITT Circuit</p>
                    </div>
                    <div class="table-cell hiit-pm-1">
                      <span>6:00pm</span>
                      <p>HITT</p>
                    </div>
                    <div class="table-cell"></div>
                    <div class="table-cell"></div>
                  </div>
                  <div class="table-row">
                    <div class="table-cell hiit-pm-2">
                      <span>7:00pm</span>
                      <p>HITT Boxing</p>
                    </div>
                    <div class="table-cell"></div>
                    <div class="table-cell hiit-pm-2">
                      <span>7:00pm</span>
                      <p>HITT Circuit</p>
                    </div>
                    <div class="table-cell"></div>
                    <div class="table-cell hiit-pm-2">
                      <span>7:00pm</span>
                      <p>HITT</p>
                    </div>
                    <div class="table-cell"></div>
                    <div class="table-cell"></div>
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

index.propTypes = {};

export default index;