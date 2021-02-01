import React, { Component } from "react";
import Common from "../../services/common";

class Home extends Component {
  state = {
    profile: [],
  };

  commonService = new Common();

  componentDidMount() {
    this.commonService
      .getApexData({ id: 1 })
      .then((res) => res.json())
      .then(
        (data) => {
          console.log(data);
        },
        (err) => {
          console.log(err);
          alert("Something went wrong! Try again.");
        }
      );
  }

  render() {
    return (
      <React.Fragment>
        <p>This is home page!</p>
      </React.Fragment>
    );
  }
}

export default Home;
