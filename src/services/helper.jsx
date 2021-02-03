import { Component } from "react";

class Helper extends Component {
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
      return true;
    } catch (e) {
      this.setCookie(key, value);
    }
    return false;
  }
}

export default Helper;
