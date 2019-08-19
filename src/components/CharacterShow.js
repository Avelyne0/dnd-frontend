import React, { Component } from "react";
import img_source from '../img_source.json'


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
    let { character } = this.props || [];

    // debugger
    console.log(character);
    return (
      <div id="card" className="ui card">
        <div className="image">
          <img
            src={this.setCharacterImage()}
            alt="temp"
          />
        </div>
        <div className="content">
          <h1 className="header">{character.name}</h1>
          <div className="meta">
            <span className="date">{character.gender}</span>
          </div>
          <div className="description">
            <p>Class: {character.charClass}</p>
            <p>Race: {character.race}</p>
            <p>Age: {character.age}</p>
            <p>Height: {character.height}</p>
            <p>Weight: {character.weight}</p>
            <p>Eyes: {character.eyes}</p>
            <p>Skin: {character.skin}</p>
            <p>Alignment: {character.alignment}</p>
            {character.additionalNotes !== undefined
            ? character.additionalNotes.map(note => <p key={note}>{note}</p>)
              : null}
            <p>{character.flaws}</p>
          <p>{character.backgroundFeature}</p>
          </div>
        </div>
        <div className="extra content" onClick={this.toggleShowDetails}>
          <i className="d and d icon">more details </i>
        </div>
      </div>
    );
  }
}
