import React, { Component } from "react";
import CharacterMain from "./CharacterMain";
import CharacterDetails from "./CharacterDetails";

export default class CharacterShow extends Component {
  state = {
    showDetails: false
  };

  toggleShowDetails = () => {
    this.setState({ showDetails: !this.state.showDetails });
  };

  render() {
    let { character } = this.props;

    return (
      <div className="ui one column stackable center aligned page grid">
        <div className="ui center aligned card">
          <div className="image">
            <img
              src="https://1d4chan.org/images/thumb/1/17/Iggwilv_2.jpg/200px-Iggwilv_2.jpg"
              alt="temp"
            />
          </div>
          <div className="content">
            <h4 className="header">{character.name}</h4>
            <div className="description">
              {this.state.showDetails ? (
                <CharacterDetails character={character} />
              ) : (
                <CharacterMain character={character} />
              )}
            </div>
          </div>
          <div className="extra content" onClick={this.toggleShowDetails}>
            <i className="d and d icon">
              {this.state.showDetails ? "Back" : "Show Details"}
            </i>
          </div>
        </div>
      </div>
    );
  }
}
