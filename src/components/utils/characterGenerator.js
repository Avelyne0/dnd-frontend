import { rollAttribute, random, randomRange } from './utils'
import data from '../../data.json'
import img_source from '../../img_source.json'

let char = {
  Proficiency: 2
}
const updateChar = (newStats) => {
  char = {
    ...char,
    ...newStats
  }
}

const setCharacterImage = () => {
  const { race, charClass, gender } = char
  if (race && charClass && gender) {
    if (race.toLowerCase().includes("genasi")) {
      updateChar({img_source: img_source["Genasi"][race.toLowerCase().split(' ').join('-') + "-" + gender.toLowerCase()]})
    } else {
      const superRace = Object.keys(img_source).find(r => race.toLowerCase().includes(r.toLowerCase()))
      updateChar({img_source: img_source[superRace][charClass.toLowerCase() + "-" + gender.toLowerCase()]})
    }
  } else {
    return
  }
}

export const generateCharacter = () => {
  setCharacterName()
  setCharacterStatsRaceSkills()
  setCharacterAlignmentBackgroundDeity()
  setCharacterClass()
  setCharacterImage()
  return { ...char }
}

const setCharacterName = () => {
  const gender = random(data.gender)
  updateChar({ gender })
  if (gender === "male") {
    const name = random(data.names.male)
    updateChar({ name })
  } else {
    const name = random(data.names.female)
    updateChar({ name })
  }
}

const setCharacterAlignmentBackgroundDeity = () => {
  const alignment = random(data.alignments)
  updateChar({ alignment: alignment })

  const background = Object.values(random(data.backgrounds))[0]
  const alignmentSplit = alignment.toLocaleLowerCase().split(' ')
  const validIdealArray = background.ideals.filter(ideal => alignmentSplit.includes(ideal[0].alignment.toLocaleLowerCase()) || "any" === ideal[0].alignment.toLocaleLowerCase())
  const validIdeals = validIdealArray.map(array => array[1].ideal)
  const filteredDeitiesArray = data.deities.filter(deity => alignmentSplit.includes(deity[1].alignment.toLocaleLowerCase()))
  const filteredDeities = filteredDeitiesArray.map(array => array[0].god)

  updateChar({

    backgroundName: background.name,
    backgroundFeature: background.backgroundFeature,
    ideals: random(validIdeals),
    bonds: random(background.bonds),
    flaws: random(background.flaws),
    personalityTraits: random(background.personalityTraits),
    deity: random(filteredDeities)
  })
}

const setCharacterClass = () => {
  const characterClass = random(data.classes)
  updateChar({ charClass: characterClass })
}

const setCharacterStatsRaceSkills = () => {
  const race = Object.values(random(data.races))[0]
  var skin = random(race.physicalCharacteristics[0].skin)
  if (race.name === "Dragonborn") {
    const draconicAncestry = random(race.draconicAncestry)
    const draconicAncestryName = Object.keys(draconicAncestry)[0]
    const draconicAncestryEffect = Object.values(draconicAncestry)[0]
    // updateChar({ additionalNotes: [...char.additionalNotes, draconicAncestryName, draconicAncestryEffect] })
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

  updateChar({ race: race.name })
  const raceStats = race.abilityScore // TO DO
  var STR = rollAttribute()
  var DEX = rollAttribute()
  var CON = rollAttribute()
  var INT = rollAttribute()
  var WIS = rollAttribute()
  var CHA = rollAttribute()
  updateChar({
    STR: STR,
    DEX: DEX,
    CON: CON,
    INT: INT,
    WIS: WIS,
    CHA: CHA
  });
  const strBonus = Math.floor((STR - 10) / 2);
  const strSkillBonus = strBonus + char.Proficiency;
  const dexBonus = Math.floor((DEX - 10) / 2);
  const dexSkillBonus = dexBonus + char.Proficiency;
  const conBonus = Math.floor((CON - 10) / 2);
  const intBonus = Math.floor((INT - 10) / 2);
  const intSkillBonus = intBonus + char.Proficiency;
  const wisBonus = Math.floor((WIS - 10) / 2);
  const wisSkillBonus = wisBonus + char.Proficiency;
  const chaBonus = Math.floor((CHA - 10) / 2);
  const chaSkillBonus = chaBonus + char.Proficiency;
  // updateChar({
  //   skills: {
  //     Athletics: strSkillBonus,
  //     Acrobatics: dexSkillBonus,
  //     SleightOfHand: dexSkillBonus,
  //     Stealth: dexSkillBonus,
  //     Arcana: intSkillBonus,
  //     History: intSkillBonus,
  //     Investigation: intSkillBonus,
  //     Nature: intSkillBonus,
  //     Religion: intSkillBonus,
  //     AnimalHandling: wisSkillBonus,
  //     Insight: wisSkillBonus,
  //     Medicine: wisSkillBonus,
  //     Perception: wisSkillBonus,
  //     Survival: wisSkillBonus,
  //     Deception: chaSkillBonus,
  //     Intimidation: chaSkillBonus,
  //     Performance: chaSkillBonus,
  //     Persuasion: chaSkillBonus,
  //   }
  // })
  updateChar({

    age: age,
    weight: weight,
    height: height,
    skin: skin,
    eyes: eyes

  })
  // const additionalNotes = race.additionalNotes
  // updateChar({ additionalNotes: [...char.additionalNotes, additionalNotes] })
}