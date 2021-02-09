import React, { Component } from "react";
import Common from "../../services/common";
import { Link } from "react-router-dom";
import Info from "./info";

class Stats extends Component {
  state = {
    profile: {},
    isApexStateFetching: false,
  };

  commonService = new Common();

  componentDidMount() {
    this.getApexStats();
  }

  getApexStats = () => {
    this.setState({ isApexStateFetching: true });
    this.commonService
      .getApexData()
      .then((res) => {
        if (res.data) {
          let profile = res.data.data;
          this.setState({ profile });
        }
      })
      .catch((err) => {})
      .then(() => {
        this.setState({ isApexStateFetching: false });
      });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.isApexStateFetching ? (
          <React.Fragment>
            <p>Loading...</p>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {this.state.profile && Object.keys(this.state.profile).length ? (
              <React.Fragment>
                <Info stats={this.state.profile.stats} />
                {/* <BasicInfo profileBasicInfo={this.state.profile.metadata} /> */}
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div className="alert alert-warning">
                  Apex stats information not found! Please try to set
                  configuration from{" "}
                  <Link to="/settings/config-user">here</Link>.
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default Stats;
