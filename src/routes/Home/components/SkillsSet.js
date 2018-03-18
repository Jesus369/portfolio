import React from "react";

const SkillsSet = () => {
  return (
    <div className="skills_set_wrap">
      <Databases />
      <Languages />
      <Frameworks />
    </div>
  );
};

const Databases = () => {
  return (
    <div className="databases_wrap">
      <label>Databases</label>
      <div>
        <p>
          Create, Read, Write, Delete, or just CRUD!{" "}
          <img src={require("../../../page_images/thumbsup.png")} /> I use each
          within PostgreSQL and MongoDB. More databases to come!
        </p>
      </div>
    </div>
  );
};

const Languages = () => {
  return (
    <div className="languages_wrap">
      <label>Languages</label>
      <div>
        <p>
          Fluent in Javascript, HTML, CSS, and at the moment touching up on
          Python while learning C++
        </p>
      </div>
    </div>
  );
};

const Frameworks = () => {
  return (
    <div className="frameworks_wrap">
      <label>Frameworks</label>
      <div>
        <p>
          I develop projects that'll have apps up and running with Node, and
          Express as a framework. Currently continuing to learn GraphQL and
          Apollo Client, alongside with learning Relay.
        </p>
      </div>
    </div>
  );
};

export default SkillsSet;
