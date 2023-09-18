/* eslint-disable */
import "./style.css";
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
const suits = ["♠", "♣", "♥", "♦"];
const cardValue = document.querySelector(".card-value");
const cardSuitTopLeft = document.querySelector(".top-left");
const cardSuitBottomRight = document.querySelector(".bottom-right");
const generateBtn = document.querySelector("#generate-btn");

generateBtn.addEventListener("click", function() {
  const value = values[Math.floor(Math.random() * values.length)];
  const suit = suits[Math.floor(Math.random() * suits.length)];
  cardValue.textContent = value;
  cardSuitTopLeft.innerHTML = suit;
  cardSuitBottomRight.innerHTML = suit;
  cardSuitTopLeft.classList = `card-suit top-left ${suit.toLowerCase()}`;
  cardSuitBottomRight.classList = `card-suit bottom-right ${suit.toLowerCase()}`;
});
