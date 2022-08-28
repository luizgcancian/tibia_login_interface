const characterCard = document.querySelectorAll(".character-card");
const megaWrapper = document.querySelector(".mega-wrapper");
const btnLogin = document.querySelector(".btn-login");
const loginForm = document.querySelector(".hide-form");
const charWrapper = document.querySelector(".char-wrapper");
const btnCharacter = document.querySelector(".btn-character");
const thanksMessage = document.querySelector(".thanks");

const handleLogin = (e) => {
  e.preventDefault();
  loginForm.classList.add("active");
  charWrapper.classList.add("active");
  fetchCharacters();
};

const handleCharacters = (e) => {
  e.preventDefault();
  charWrapper.classList.remove("active");
  thanksMessage.classList.add("active");
};

btnLogin.addEventListener("click", handleLogin);
btnCharacter.addEventListener("click", handleCharacters);

function fetchCharacters() {
  const data = fetch(
    "https://api.tibiadata.com/v3/highscores/all/loyaltypoints/all"
  );

  data
    .then((r) => {
      return r.json();
    })
    .then((characterInfo) => {
      for (let index = 0; index < 3; index++) {
        console.log("teste");
        megaWrapper.appendChild(
          document
            .createRange()
            .createContextualFragment(
              `<div class="character-card"><div class="character-name">${characterInfo.highscores.highscore_list[index].name}</div><div class="character-level">${characterInfo.highscores.highscore_list[index].level}</div><div class="character-vocation">${characterInfo.highscores.highscore_list[index].vocation}</div></div>`
            )
        );
      }
    });
}
