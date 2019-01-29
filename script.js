const card_box = document.querySelector(".card-box");
let cards;
let card_face;

let count_cards = [];
let match_pairs = [];

// BANK OF 16 ICONS
const icons_counters = {
  "🐼": 0,
  "👽": 0,
  "🐷": 0,
  "🐸": 0,
  "🐋": 0,
  "💩": 0,
  "🐢": 0,
  "💀": 0,
  "🤓": 0,
  "👩‍🎨": 0,
  "🕺": 0,
  "🥤": 0,
};

function create(cards_num) {

  const icons = Object.keys(icons_counters);
 
  for(let x = 0; x < 2; x++) {
    
    for (let i = 0; i < cards_num; i++) {

    card_box.innerHTML += `
     <div class="card">
     <div class="card__face card__face--front">front</div>
     <div class="card__face card__face--back">
         ${icons[i]}
     </div>
    </div>  
    `
  }
}
   cards = document.querySelectorAll(".card");
   card_face = document.querySelectorAll(".card__face");
}

function shuffle() {
  const arr = [...cards];

  for (let i = arr.length; i >= 0; i--) {
    card_box.appendChild(card_box.children[(Math.random() * i) | 0]);
  }
}

function click() {
  cards.forEach(card => { card.addEventListener("click", function(e) {

      card.classList.add("is-flipped");
      count_cards.push(card);

      matching();
    });
  });
}

function matching() {

  const first = count_cards[0].children[1].outerText;
  const second = count_cards[1].children[1].outerText;
 
  if (count_cards.length === 2) {

    if (first === second) {
      match_pairs.push(count_cards);

      reset();
      won();
    }

    else {
      flip_back();
    }
  }
}

function reset() {
  count_cards = [];
}

function won() {
  if (match_pairs.length === cards_num) {
    alert("You Won!!!");
  }
}

function flip_back() {
  setTimeout(() => {
    count_cards.forEach(elm => {
      elm.classList.remove("is-flipped");
      reset();
    });
  }, 1000);
}

function init() {
  // choosing the amount of pairs
  // const num_of_cards = prompt('how many pairs? - max 8');


  create(8);
  shuffle();
  click();
}

init();
