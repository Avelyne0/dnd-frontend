import React from 'react';
import { Header } from 'semantic-ui-react'

const CharacterDetails = ({ character }) => {
    return (
        <div>
            <Header as='h3'>Stats:</Header>
            <table id="table" className="ui very basic collapsing celled table">
                <tbody>
                    <tr>
                        <td><h4 className="ui image header">STR</h4></td>
                        <td>{character.STR}</td>

                        <td><h4 className="ui image header">DEX</h4></td>
                        <td>{character.DEX}</td>
                    </tr>

                    <tr>
                        <td><h4 className="ui image header">CON</h4></td>
                        <td>{character.CON}</td>

                        <td><h4 className="ui image header">INT</h4></td>
                        <td>{character.INT}</td>
                    </tr>

                    <tr>
                        <td><h4 className="ui image header">WIS</h4></td>
                        <td>{character.WIS}</td>

                        <td><h4 className="ui image header">CHA</h4></td>
                        <td>{character.CHA}</td>
                    </tr>
                </tbody>
            </table>
            {
                Object.values(character.additional_notes)[0].map(note => <div key={note}><div> {note}<br /></div></div>)
            }
            <p>{character.background_feature}</p>
        </div>
    )
}

export default CharacterDetails
