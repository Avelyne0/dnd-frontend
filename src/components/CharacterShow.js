import React, { Component } from "react";
import img_source from '../img_source.json';
import CharacterMain from "./CharacterMain";
import CharacterDetails from "./CharacterDetails";

export default class CharacterShow extends Component {
  state = {
    showDetails: false
  };

  toggleShowDetails = () => {
    this.setState({ showDetails: !this.state.showDetails });
  };

  setCharacterImage = () => {
    var { race, charClass, gender } = this.props.character
    if (race && charClass && gender) {
      if(race.toLowerCase().includes("genasi")){
        return img_source["Genasi"][race.toLowerCase().split(' ').join('-') + "-" + gender.toLowerCase() ]
      } else {
      const superRace = Object.keys(img_source).find(r => race.toLowerCase().includes(r.toLowerCase()))
      return img_source[superRace][charClass.toLowerCase() + "-" + gender.toLowerCase()]
      }
    } else {
      return 
    }
  }

  render() {
    let { character } = this.props;

    console.log(this.props)

    return (
      <div className="ui one column stackable center aligned page grid">
        <div className="ui center aligned card">
          <div className="image">
            <img
              src={this.setCharacterImage()}
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
