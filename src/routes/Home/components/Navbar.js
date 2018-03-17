import React, { Component } from "react";

class Navbar extends Component {
  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = e => {
    console.log("scrolling");
  };

  render() {
    return (
      <div onScroll={this.handleScroll} className="nav">
        <ul>
          <li>
            <a
              className="linkto"
              href="https://github.com/Jesus369"
              target="blank"
            >
              Github
            </a>
          </li>
          <li>
            <a
              className="linkto"
              href="https://www.linkedin.com/in/jesus-flores-b5875359/"
              target="blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
