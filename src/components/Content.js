import React, { Component } from "react";
import ThemeSwitch from "./ThemeSwitch";
import PropTypes from "prop-types";

class Content extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  };

  render() {
    return (
      <div>
        <h1 style={{ color: this.props.themeColor }}>React.js 小书</h1>
        <ThemeSwitch {...this.props}/>
      </div>
    );
  }
}

export default Content;
