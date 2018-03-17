import React from "react";

const SkillSet = () => {
  return (
    <div className="skillset">
      <Knowing />
      <Learning />
    </div>
  );
};

export default SkillSet;

const Knowing = () => {
  return (
    <table className="knowing">
      <tr>
        <th colSpan="5">Current Skill-Set</th>
      </tr>
      <th colSpan="5">Languages</th>
      <tr>
        <td>Python</td>
        <td>Javascript</td>
        <td>HTML</td>
        <td>CSS</td>
      </tr>
      <th colSpan="5">Databases</th>
      <tr>
        <td>PostgreSQL</td>
        <td>MongoDB</td>
        <td>Firebase</td>
      </tr>
      <th colSpan="5">Frameworks</th>
      <tr>
        <td>Node JS</td>
        <td>Express</td>
      </tr>
      <th colSpan="5">Libraries</th>
      <tr>
        <td>JQuery</td>
        <td>Sass</td>
        <td>Bootstrap</td>
      </tr>
    </table>
  );
};

const Learning = () => {
  return (
    <table className="learning">
      <tr>
        <th colSpan="5">Learning</th>
      </tr>
      <th colSpan="1">Query Language</th>
      <tr>
        <td>Graphql</td>
      </tr>
      <th colSpan="5">Frameworks</th>
      <tr>
        <td>Apollo Client</td>
        <td>Relay</td>
      </tr>
    </table>
  );
};
