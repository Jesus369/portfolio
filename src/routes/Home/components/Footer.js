import React from "react";

const Footer = () => {
  return (
    <table className="footer">
      <tr>
        <td>
          <a
            className="linkto"
            href="https://www.linkedin.com/in/jesus-flores-b5875359/"
            target="blank"
          >
            <img src={require("../../../contactme/linkedin2.png")} />
          </a>
        </td>

        <td>
          <a
            className="linkto"
            href="https://www.linkedin.com/in/jesus-flores-b5875359/"
            target="blank"
          >
            LinkedIn
          </a>
        </td>

        <td>
          <a
            className="linkto"
            href="https://github.com/Jesus369"
            target="blank"
          >
            <img src={require("../../../contactme/github2.png")} />
          </a>
        </td>

        <td>
          <a
            className="linkto"
            href="https://github.com/Jesus369"
            target="blank"
          >
            Github
          </a>
        </td>
      </tr>
    </table>
  );
};

export default Footer;
