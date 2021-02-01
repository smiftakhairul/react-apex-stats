import React, { Component } from "react";

class Helper extends Component {
  state = {};

  getStorageItem(key) {
    let output = null;

    try {
      output = localStorage.getItem(key);
    } catch (e) {
      output = this.getCookie(key);
    }

    return output;
  }

  setStorageItem(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      this.setCookie(key, value);
    }
  }
}

export default Helper;
