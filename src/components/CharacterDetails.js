import React from 'react';

const CharacterDetails = ({ character }) => {
    return(
        <div>
            <h3>Stats:</h3>
            <table id="table" className="ui very basic collapsing celled table">
                <tbody>
                    <tr>
                    <td><h4 className="ui image header">CHA</h4></td>
                    <td>{character.CHA}</td>

                    <td><h4 className="ui image header">INT</h4></td>
                    <td>{character.INT}</td>
                    </tr>

                    <tr>
                    <td><h4 className="ui image header">CON</h4></td>
                    <td>{character.CON}</td>
                    
                    <td><h4 className="ui image header">STR</h4></td>
                    <td>{character.STR}</td>
                    </tr>

                    <tr>
                    <td><h4 className="ui image header">DEX</h4></td>
                    <td>{character.DEX}</td>

                    <td><h4 className="ui image header">WIS</h4></td>
                    <td>{character.WIS}</td>
                    </tr>
                </tbody>
            </table>    
            {character.additionalNotes !== undefined
            ? character.additionalNotes.map(note => <p key={note}>{note}</p>)
            : null} 
        </div>
    )
}

export default CharacterDetails