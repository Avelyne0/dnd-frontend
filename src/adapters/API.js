// const endpoint = 'http://localhost:3000/api/v1'
const endpoint = 'https://bardic-inspiration-backend.herokuapp.com/api/v1'
const signupUrl = `${endpoint}/users`
const loginUrl = `${endpoint}/login`
const charactersUrl = `${endpoint}/characters`
const validateUrl = `${endpoint}/validate`


const jsonify = res => {
    if (res.ok)
        return res.json()
    else
        throw res.json()
}
const handleServerError = response => {
    // console.error(response)
    throw response
}

const saveToken = data => {
    localStorage.setItem('token', data.token)
    return data.user
}

const constructHeaders = (moreHeaders = {}) => (
    {
        'Authorization': localStorage.getItem('token'),
        ...moreHeaders
    }
)

const signUp = (user) => fetch(signupUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user })
}).then(jsonify)
    .then(saveToken)
    .catch(handleServerError)


const logIn = (user) => fetch(loginUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user })
}).then(jsonify)
    .then(saveToken)
    .catch(handleServerError)

const validateUser = () => {
    if (!localStorage.getItem('token')) return Promise.resolve({ error: 'no token' })

    return fetch(validateUrl, {
        headers: constructHeaders()
    }).then(jsonify)
        .then(saveToken)
        .catch(handleServerError)
}

const postCharacter = (character) => fetch(charactersUrl, {
    method: 'POST',
    body: JSON.stringify({
        name: character.name,
        age: character.age,
        eyes: character.eyes,
        height: character.height,
        skin: character.skin,
        weight: character.weight,
        alignment: character.alignment,
        background: character.backgroundName,
        background_feature: character.backgroundFeature,
        bonds: character.bonds,
        deity: character.deity,
        flaws: character.flaws,
        ideals: character.ideals,
        personality_traits: character.personalityTraits,
        char_class: character.charClass,
        gender: character.gender,
        race: character.race,
        strength: character.STR,
        dexterity: character.DEX,
        constitution: character.CON,
        intelligence: character.INT,
        wisdom: character.WIS,
        charisma: character.CHA,
        img_url: character.img_url
    }),
    headers: constructHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    })
}).then(jsonify)
    .catch(handleServerError)

const deleteCharacter = id => fetch(`${charactersUrl}/${id}`, {
    method: 'DELETE'
})

const getCharacter = id => fetch(`${charactersUrl}/${id}`).then(jsonify)

const getCharacters = () => fetch(charactersUrl).then(jsonify)

const clearToken = () => localStorage.removeItem('token')

export default {
    signUp,
    logIn,
    validateUser,
    clearToken,
    postCharacter,
    getCharacter,
    getCharacters,
    deleteCharacter
}
