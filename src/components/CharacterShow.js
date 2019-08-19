import React, { Component } from "react";

export default class CharacterShow extends Component {
  state = {
    showDetails: false
  };

  toggleShowDetails = () => {
    this.setState({ showDetails: !this.state.showDetails });
  };

  render() {
    let { character } = this.props || [];

    // debugger
    console.log(character);
    return (
      <div id="card" className="ui card">
        <div className="image">
          <img
            src="https://1d4chan.org/images/thumb/1/17/Iggwilv_2.jpg/200px-Iggwilv_2.jpg"
            alt="temp"
          />
        </div>
        <div className="content">
          <a className="header">{character.name}</a>
          <div className="meta">
            <span className="date">{character.gender}</span>
          </div>
          <div className="description">
            <p>Class: {character.class}</p>
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
            
          <p>{character.background}</p>
          </div>
        </div>
        <div className="extra content" onClick={this.toggleShowDetails}>
          <i className="d and d icon">more details </i>
        </div>
      </div>
    );
  }
}
