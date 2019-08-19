import React from 'react';

const CharacterMain = ({ character }) => {
    return(
        <div>
            <p>Gender: {character.gender}</p>
            <p>Class: {character.charClass}</p>
            <p>Race: {character.race}</p>
            <p>Age: {character.age}</p>
            <p>Height: {character.height}</p>
            <p>Weight: {character.weight}</p>
            <p>Eyes: {character.eyes}</p>
            <p>Skin: {character.skin}</p>
            <p>Alignment: {character.alignment}</p>
            <p>Background: {character.backgroundName}</p>
            <p>Flaws: {character.flaws}</p>
            <p>Bonds: {character.bonds}</p>
            <p>Ideals: {character.ideals}</p>
            <p>Personality traits: {character.personalityTraits}</p>  
        </div>
    )
}

export default CharacterMain