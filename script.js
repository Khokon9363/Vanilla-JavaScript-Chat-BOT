let divs = document.querySelectorAll('.msg')

for (let i = 0; i < divs.length; i++) {
   if (i !== 0) {
     divs[i].style.display = 'none'
   }
}

function sendName() {
  let personNameSpans = document.querySelectorAll('.person-name')
  for (let i = 0; i < personNameSpans.length; i++) {
    personNameSpans[i].innerHTML = document.querySelector(".msger-input").value
  }
  document.querySelector(".msger-input").value = ''
  document.querySelector(".msger-input").disabled = true
  document.querySelector(".msger-send-btn").disabled = true
  divs[1].style.display = 'flex'
  divs[2].style.display = 'flex'
  scroll()
}

function sendGender(gender) {
  document.getElementById('gender').innerHTML = gender
  divs[3].style.display = 'flex'
  divs[4].style.display = 'flex'
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
  divs[5].style.display = 'flex'
  divs[6].style.display = 'flex'
  scroll()
}

function sendItems() {
  document.getElementById('OchtendItems').innerHTML = document.getElementById('sortablelist2').innerText
  document.getElementById('MiddagItems').innerHTML = document.getElementById('sortablelist3').innerText
  document.getElementById('AvondItems').innerHTML = document.getElementById('sortablelist4').innerText
  divs[7].style.display = 'flex'
  divs[8].style.display = 'flex'
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