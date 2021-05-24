let askNameDiv = document.getElementById('askNameDiv');
let nameDiv = document.getElementById('nameDiv');
let askGenderDiv = document.getElementById('askGenderDiv');
let genderNameDiv = document.getElementById('genderNameDiv');
let askGamesDiv = document.getElementById('askGamesDiv');
let askColorsDiv = document.getElementById('askColorsDiv');
let gamesDiv = document.getElementById('gamesDiv');
let colorsDiv = document.getElementById('colorsDiv');
let askProductDiv = document.getElementById('askProductDiv');
let productDiv = document.getElementById('productDiv');
let goodByeDiv = document.getElementById('goodByeDiv');

function hideAllFieldsInitially() {
  nameDiv.style.display = 'none'
  askGenderDiv.style.display = 'none'
  genderNameDiv.style.display = 'none'
  askGamesDiv.style.display = 'none'
  askColorsDiv.style.display = 'none'
  gamesDiv.style.display = 'none'
  colorsDiv.style.display = 'none'
  askProductDiv.style.display = 'none'
  productDiv.style.display = 'none'
  goodByeDiv.style.display = 'none'
}
hideAllFieldsInitially()

function sendName() {
  let name = document.querySelector(".msger-input")
  let btn = document.querySelector(".msger-send-btn")
  if (name.value.trim().length != 0) {
    let personNameSpans = document.querySelectorAll('.person-name')
    for (let i = 0; i < personNameSpans.length; i++) {
      personNameSpans[i].innerHTML = name.value
    }
    name.value = ''
    name.disabled = true
    btn.disabled = true
    nameDiv.style.display = 'flex'
    askGenderDiv.style.display = 'flex'
    scroll()
  }
}

function sendGender(gender) {
  document.getElementById('gender').innerHTML = gender
  genderNameDiv.style.display = 'flex'
  if (gender == 'Male') {
    askGamesDiv.style.display = 'flex'
    askColorsDiv.style.display = 'none'
  }else{
    askColorsDiv.style.display = 'flex'
    askGamesDiv.style.display = 'none'
  }
  scroll()
}

let games = [];
function selectGames(button, game) {
  if (games.includes(game)) {
    button.style.backgroundColor = '#26a69a'
    games.splice(games.indexOf(game), 1)
    return
  }
    button.style.backgroundColor = '#5eec6f'
    games.push(game)
}

function sendGames() {
  let allGames = document.getElementById('games')
  let html = ''
  for (let i = 0; i < games.length; i++) {
      html += games[i] + ' ,'
  }
  allGames.innerText = html
  gamesDiv.style.display = 'flex'
  askProductDiv.style.display = 'flex'
  scroll()
}

let colors = [];
function selectColor(button, color) {
  if (colors.includes(color)) {
    button.style.backgroundColor = '#26a69a'
    colors.splice(colors.indexOf(color), 1)
    return
  }
    button.style.backgroundColor = '#5eec6f'
    colors.push(color)
}

function sendColor() {
  let allColors = document.getElementById('colors')
  let html = ''
  for (let i = 0; i < colors.length; i++) {
      html += colors[i] + ' ,'
  }
  allColors.innerText = html
  colorsDiv.style.display = 'flex'
  askProductDiv.style.display = 'flex'
  scroll()
}

function sendItems() {
  document.getElementById('OchtendItems').innerHTML = document.getElementById('sortablelist2').innerText
  document.getElementById('MiddagItems').innerHTML = document.getElementById('sortablelist3').innerText
  document.getElementById('AvondItems').innerHTML = document.getElementById('sortablelist4').innerText
  productDiv.style.display = 'flex'
  goodByeDiv.style.display = 'flex'
  scroll();
  permission = confirm('Please confirm to accept your informations throw mail');

  if (permission == true) {
    sendTophp();
  }
}

function sendTophp() {
  document.querySelector('#name_php').value      = document.querySelector('.person-name').innerHTML
  document.querySelector('#gender_php').value    = document.getElementById('gender').innerHTML
  document.querySelector('#games_php').value     = document.getElementById('games').innerHTML
  document.querySelector('#colors_php').value     = document.getElementById('colors').innerHTML
  document.querySelector('#producten_php').value = 
  document.getElementById('OchtendItems').innerHTML + ', ' +
  document.getElementById('MiddagItems').innerHTML + ', ' +
  document.getElementById('AvondItems').innerHTML + ', '
  document.getElementById('data').submit();
}

// scroll
function scroll() {
  let main = document.querySelector('.msger-chat');
  main.scrollTop += 750
}

// sortable plugin
new Sortable(sortablelist, {
   animation: 150,
   group: {
    name: "shared"
	}
 })
new Sortable(sortablelist2, {
   animation: 150,
   group: {
    name: "shared"
	}
 })
new Sortable(sortablelist3, {
   animation: 150,
   group: {
    name: "shared"
	}
 })
new Sortable(sortablelist4, {
   animation: 150,
   group: {
    name: "shared"
	}
 })