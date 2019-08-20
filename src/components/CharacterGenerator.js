import React, { Component } from 'react'
import { rollAttribute, random, randomRange } from './utils/utils'
import data from '../data.json'
import CharacterShow from './CharacterShow.js';

export default class CharacterGenerator extends Component {
  state = {
    name: '',
    equipment: [],
    armorClass: null,
    skills: {
      Proficiency: 2
    },
    physicalCharacteristics: {
      'hair': null
    },
    additionalNotes: []
  }

  componentDidMount() {
    this.setCharacter()
  }

  setCharacter = () => {
    this.setCharacterName()
    this.setCharacterStatsRaceSkills()
    this.setCharacterAlignmentBackgroundDeity()
    this.setCharacterClass()
  }

  setCharacterName = () => {
    const gender = random(data.gender)
    this.setState({ gender })
    if (gender === "male") {
      const name = random(data.names.male)
      this.setState({ name })
    } else {
      const name = random(data.names.female)
      this.setState({ name })
    }
  }

  setCharacterAlignmentBackgroundDeity = () => {
    const alignment = random(data.alignments)
    this.setState({ alignment: alignment })

    const background = Object.values(random(data.backgrounds))[0]
    const alignmentSplit = alignment.toLocaleLowerCase().split(' ')
    const validIdealArray = background.ideals.filter(ideal => alignmentSplit.includes(ideal[0].alignment.toLocaleLowerCase()) || "any" === ideal[0].alignment.toLocaleLowerCase())
    const validIdeals = validIdealArray.map(array => array[1].ideal)
    const filteredDeitiesArray = data.deities.filter(deity => alignmentSplit.includes(deity[1].alignment.toLocaleLowerCase()))
    const filteredDeities = filteredDeitiesArray.map(array => array[0].god)

    this.setState({

      backgroundName: background.name,
      backgroundFeature: background.backgroundFeature,
      ideals: random(validIdeals),
      bonds: random(background.bonds),
      flaws: random(background.flaws),
      personalityTraits: random(background.personalityTraits),
      deity: random(filteredDeities)
    })
  }

  setCharacterClass = () => {
    const characterClass = random(data.classes)
    this.setState({ charClass: characterClass })
  }

  setCharacterStatsRaceSkills = () => {
    const race = Object.values(random(data.races))[0]
    var skin = random(race.physicalCharacteristics[0].skin)
    if (race.name === "Dragonborn") {
      const draconicAncestry = random(race.draconicAncestry)
      const draconicAncestryName = Object.keys(draconicAncestry)[0]
      const draconicAncestryEffect = Object.values(draconicAncestry)[0]
      this.setState({ additionalNotes: [...this.state.additionalNotes, draconicAncestryName, draconicAncestryEffect] })
      skin = `${draconicAncestryName.toLocaleLowerCase().split(' ')[0]} scales`
    }

    const age = Math.floor(randomRange(race.ageRange))
    const weight = Math.floor(randomRange(race.weightRange)) + "lbs"
    const realHeight = randomRange(race.heightRange);
    const feet = Math.floor(realHeight);
    const inches = Math.round((realHeight - feet) * 12);
    const height = feet + "'" + inches + '"';
    // var hair = ''
    // race.PhysicalCharacteristics[0].hair ? hair = random(race.PhysicalCharacteristics[0].hair) : hair = ''
    // console.log(hair)
    const eyes = random(data.physicalCharacteristics[0].eyes)

    this.setState({ race: race.name })
    const raceStats = race.abilityScore // TO DO
    var STR = rollAttribute()
    var DEX = rollAttribute()
    var CON = rollAttribute()
    var INT = rollAttribute()
    var WIS = rollAttribute()
    var CHA = rollAttribute()
    this.setState({
      STR: STR,
      DEX: DEX,
      CON: CON,
      INT: INT,
      WIS: WIS,
      CHA: CHA
    });
    const strBonus = Math.floor((STR - 10) / 2);
    const strSkillBonus = strBonus + this.state.skills.Proficiency;
    const dexBonus = Math.floor((DEX - 10) / 2);
    const dexSkillBonus = dexBonus + this.state.skills.Proficiency;
    const conBonus = Math.floor((CON - 10) / 2);
    const intBonus = Math.floor((INT - 10) / 2);
    const intSkillBonus = intBonus + this.state.skills.Proficiency;
    const wisBonus = Math.floor((WIS - 10) / 2);
    const wisSkillBonus = wisBonus + this.state.skills.Proficiency;
    const chaBonus = Math.floor((CHA - 10) / 2);
    const chaSkillBonus = chaBonus + this.state.skills.Proficiency;
    this.setState({
      skills: {
        ...this.state.skills,
        Athletics: strSkillBonus,
        Acrobatics: dexSkillBonus,
        SleightOfHand: dexSkillBonus,
        Stealth: dexSkillBonus,
        Arcana: intSkillBonus,
        History: intSkillBonus,
        Investigation: intSkillBonus,
        Nature: intSkillBonus,
        Religion: intSkillBonus,
        AnimalHandling: wisSkillBonus,
        Insight: wisSkillBonus,
        Medicine: wisSkillBonus,
        Perception: wisSkillBonus,
        Survival: wisSkillBonus,
        Deception: chaSkillBonus,
        Intimidation: chaSkillBonus,
        Performance: chaSkillBonus,
        Persuasion: chaSkillBonus,
      }
    })
    this.setState({

      age: age,
      weight: weight,
      height: height,
      skin: skin,
      eyes: eyes

    })
    const additionalNotes = race.additionalNotes
    this.setState({ additionalNotes: [...this.state.additionalNotes, additionalNotes] })
  }


  resetCharacter = () => {
    this.setCharacter()
  }



  changeOneStat = (key = "STR") => {
    this.setState({
      stats: {
        ...this.state.stats,
        [key]: rollAttribute()
      }
    })
  }



  render() {
    return (
      <div>
        <CharacterShow resetCharacter={this.resetCharacter} character={this.state} />
      </div>
    )
  }
}









