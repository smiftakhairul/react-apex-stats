import React, { Component, useContext, createContext } from "react";
import Helper from "./helper";

class Common extends Component {
  state = {
    apiUrl: process.env.REACT_APP_API_URL,
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
    console.log(this.state.apexUsername);

    let formData = new FormData();
    formData.append("api_key", "samsung-prebook-1447");
    formData.append("ref_code", "SA5EF2D3CFBB1DE");

    return fetch(this.state.apiUrl + "/standard/profile/5/SIceptix", {
      method: "GET",
      headers: {
        "TRN-Api-Key": "051af0a4-0d49-4b4a-b593-38bd68c4c40c",
      },
    });
  };
}

export default Common;
