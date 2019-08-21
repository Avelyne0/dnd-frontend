import React from "react";

const CharacterDetails = ({ character }) => {
  return (
    <div>
      <h3>Stats:</h3>
      <table id="table" className="ui very basic collapsing celled table">
        <tbody>
          <tr>
            <td>
              <h4 className="ui image header">STR</h4>
            </td>
            <td>{character.STR}</td>

            <td>
              <h4 className="ui image header">DEX</h4>
            </td>
            <td>{character.DEX}</td>
          </tr>

          <tr>
            <td>
              <h4 className="ui image header">CON</h4>
            </td>
            <td>{character.CON}</td>

            <td>
              <h4 className="ui image header">INT</h4>
            </td>
            <td>{character.INT}</td>
          </tr>

          <tr>
            <td>
              <h4 className="ui image header">WIS</h4>
            </td>
            <td>{character.WIS}</td>

            <td>
              <h4 className="ui image header">CHA</h4>
            </td>
            <td>{character.CHA}</td>
          </tr>
        </tbody>
      </table>
      <p>{character.backgroundFeature}</p>
      {console.log(character)}

      {character.additionalNotes
        ? character.additionalNotes.map(note => <div key={note}>{note}</div>)
        : null
      // additionalNotes.map(arr => arr.forEach(note => <p key={note}>{note}</p>))
      }
    </div>
  );
};

export default CharacterDetails;
