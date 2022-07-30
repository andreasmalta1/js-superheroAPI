const TOKEN = '5937126376301655'
const BASE_URL = `https://superheroapi.com/api.php/${TOKEN}`
const newHero = document.getElementById('btn-new')
const heroImage = document.getElementById('hero-image')
const searchBtn = document.getElementById('btn-search')
const searchInput = document.getElementById('search')

newHero.onclick = () => getRandomHero(genNewHero())
searchBtn.onclick = () => getSearchHero(searchInput.value)

const getRandomHero = (id) => {
  fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
      showHeroInfo(json)
    })
}

const getSearchHero = (name) => {
  fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
      const hero = json.results[0]
      showHeroInfo(hero)
    })
}

const showHeroInfo = (character) => {
  const name = `<h2>${character.name}</h2>`
  const img = `<img src="${character.image.url}" height=200 width=200>`
  const stats = Object.keys(character.powerstats).map(stat => {
    `<p>${stat}: ${characterPower.stat}</p>`
  }).join('')

  heroImage.innerHTML = `${name}${img}${stats}`
}


const genNewHero = () => {
  const numHeroes = 731
  return Math.floor(Math.random() * numHeroes) + 1
}


const img = 'https://www.superherodb.com/pictures2/portraits/10/100/1390.jpg'
heroImage.innerHTML = `<img src="${img}" height=200 width=200>`

url = 'https://gateway.marvel.com:443/v1/public/characters/100?apikey=410ad7ef03cf79a4f3b0ca450ca228ef'

