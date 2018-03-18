import React, { Component } from "react";

// import openPetsBuddyModal from "../modal/PetsBuddyModal";
// import PetsBuddyModal from "../modal/PetsBuddyModal";
// import PokebaseModal from "../modal/PokebaseModal";

class Projects extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     openPetsBuddyModal: false,
  //     openPokebaseModal: false
  //   };
  // }

  // togglePetsBuddyModal = () => {
  //   this.setState(state => ({
  //     openPetsBuddyModal: !state.openPetsBuddyModal
  //   }));
  // };

  // togglePokebaseModal = () => {
  //   this.setState(state => ({
  //     openPokebaseModal: !state.openPokebaseModal
  //   }));
  // };

  render() {
    // const { openPetsBuddyModal, openPokebaseModal } = this.state;
    return (
      <div className="projects_container">
        <PetsBuddyCard />
        <PokebaseCard />
        {/* <PetsBuddyModal
          open={openPetsBuddyModal}
          close={this.togglePetsBuddyModal}
        />
        <PokebaseModal
          open={openPokebaseModal}
          close={this.togglePokebaseModal}
        /> */}
      </div>
    );
  }
}

export default Projects;

const PetsBuddyCard = () => {
  return (
    <div className="project_card">
      <PetsBuddyDesc />
      <div className="card_image">
        <img
          // onClick={this.togglePetsBuddyModal}
          alt="Project PetsBuddy"
          src={require("../../../projectImages/PetsBuddy.png")}
        />
        <ul>
          <li>Express</li>
          <li>PostgreSQL</li>
          <li>Sequelize</li>
          <li>React</li>
          <li>Apollo</li>
          <li>Graphql</li>
        </ul>
      </div>
    </div>
  );
};

const PokebaseCard = () => {
  return (
    <div className="project_card">
      <PokebaseDesc />
      <div className="card_image">
        <img
          // onClick={this.togglePokebaseModal}
          alt="Project Pokebase"
          src={require("../../../projectImages/pokebase.png")}
        />
        <ul>
          <li>Node</li>
          <li>Express</li>
          <li>PostgreSQL</li>
          <li>Sequelize</li>
          <li>Mustache Template</li>
        </ul>
      </div>
    </div>
  );
};

const PetsBuddyDesc = () => {
  return (
    <div className="project_desc1">
      <ul className="intro_to_desc">
        <li>Taken while attending DigitalCrafts</li>
        <li>Name: PetsBuddy</li>
        <li>Solo Project</li>
      </ul>
      <div className="content">
        <ul>
          <li>
            Create to-do-list boards as a client and communicate with a pet-tech
            through them!
          </li>
          <li>Real time messaging between the client and pet-tech</li>
          <li>Search for pet-techs in your area!</li>
          <li>Register as a client/pet-tech!</li>
        </ul>
      </div>
    </div>
  );
};

const PokebaseDesc = () => {
  return (
    <div className="project_desc2">
      <ul className="intro_to_desc">
        <li>Taken while attending DigitalCrafts</li>
        <li>Name: ProjectPokemon</li>
        <li>Group Project</li>
        <li>Partners: Michael Baxter</li>
      </ul>
      <div className="content">
        <ul>
          <li>
            View JSON format of all Pokemon, individual Pokemon, and the user's
            caught Pokemon
          </li>
          <li>
            View and capture a Pokemon, appending it to your list of caught
            Pokemon!
          </li>
          <li>View a list of 50 Pokemon!</li>
        </ul>
      </div>
    </div>
  );
};
