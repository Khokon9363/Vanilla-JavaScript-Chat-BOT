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

let droppedItems = []
function droppedItem(number, e) {

    if(droppedItems.includes(e.innerText)){}
    else{
      if (number == 1) {
      droppedItems.push(e.innerText)
      }
    }

    if(droppedItems.includes(e.innerText)){}
    else{
      if (number == 2) {
      droppedItems.push(e.innerText)
      }
    }

    if(droppedItems.includes(e.innerText)){}
    else{
      if (number == 3) {
      droppedItems.push(e.innerText)
      }
    }
}

function sendItems() {
  let items = document.getElementById('items')
    let html = ''
    for (let i = 0; i < droppedItems.length; i++) {
        html += `<li> ${droppedItems[i]} </li>`
    }
    items.innerHTML = html
    divs[7].style.display = 'flex'
    divs[8].style.display = 'flex'
    scroll()
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