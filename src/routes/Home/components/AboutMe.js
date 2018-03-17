import React from "react";

const AboutMe = () => {
  return (
    <div className="aboutme_wrap">
      <img
        alt="JesusFlores"
        className="me_image"
        src={require("../../../contactme/me.png")}
      />
      <div className="aboutme_content">
        <p>
          Hi, I'm Jesus, a recent graduate from{" "}
          <a href="https://www.digitalcrafts.com/">DigitalCrafts.</a> With
          little knowledge of web development I've become a confident full-stack
          web developer. As of now I'm involved in developing what will first be
          released as a web app then mobile applicaton, PetsBuddy. I'm always a
          go for interacting and taking on new projects! Feel free to contact
          me!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
