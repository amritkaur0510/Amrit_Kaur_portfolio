const images = [
  { id: 1, src: "cartoon-style-character-traveling.jpg" },
  { id: 2, src: "food.png" },
  { id: 3, src: "music.jpg" },
  { id: 4, src: "movie.png" }
];

let cards = [];
let first = null;
let second = null;
let lock = false;

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function startGame() {
  const board = document.getElementById("board");
  board.innerHTML = "";

  cards = shuffle([...images, ...images]);

  cards.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.value = item.id;

    card.innerHTML = `
      <div class="inner">
        <div class="front-face">
          <img src="${item.src}">
        </div>
        <div class="back-face">
          <img src="cover.jpg">
        </div>
      </div>
    `;

    card.onclick = () => flip(card);
    board.appendChild(card);
  });

  first = null;
  second = null;
  lock = false;
}

function flip(card) {
  if (lock || card.classList.contains("flipped")) return;

  card.classList.add("flipped");

  if (!first) {
    first = card;
  } else {
    second = card;
    lock = true;

    if (first.dataset.value === second.dataset.value) {
      reset();
    } else {
      setTimeout(() => {
        first.classList.remove("flipped");
        second.classList.remove("flipped");
        reset();
      }, 700);
    }
  }
}

function reset() {
  first = null;
  second = null;
  lock = false;
}

startGame();