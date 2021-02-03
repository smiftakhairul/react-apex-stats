import axios from "axios";
import { Component } from "react";
import Helper from "./helper";
// import axios from "axios";

class Common extends Component {
  state = {
    apiUrl: process.env.REACT_APP_API_URL,
    apiKey: process.env.REACT_APP_API_KEY,
    apexUsername: null,
    apexPlatform: null,
  };

  helperService = new Helper();

  constructor() {
    super();
    this.state.apexUsername = this.helperService.getStorageItem(
      "apex_username"
    );
    this.state.apexPlatform = this.helperService.getStorageItem(
      "apex_platform"
    );
  }

  getApexData = (collection) => {
    return axios.get(
      this.state.apiUrl +
        `/standard/profile/${this.state.apexPlatform}/${this.state.apexUsername}`,
      {
        headers: {
          "TRN-Api-Key": this.state.apiKey,
        },
      }
    );
  };
}

export default Common;
