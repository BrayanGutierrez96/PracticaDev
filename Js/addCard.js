import { places } from "./data.js";

const cardList = document.querySelector("#card-list");
const modal = document.getElementById("modal");
const close = document.getElementById("close");

function clickVisitPlace(e, img, title, desc) {
  if (e.target.classList.contains("main__card-btn")) {
    modal.querySelector(".main__card-title").innerHTML = title
    modal.querySelector(".img").src = img
    modal.querySelector(".main__card-paragraph").innerHTML = desc
    modal.style.display = "flex";
    document.body.classList.add("modal-open");
  }
}

function closeModal(e) {
  if (e.target) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
}

function addCard() {
  for (let i = 0; i < places.length; i++) {
    const currentHtml = cardList.innerHTML;

    const card = `
    <article class="main__card">
    <div class="main__card-img-container">
      <img class="main__card-img" src=${places[i].image} />
    </div>
    <h3 class="main__card-title">${places[i].title}</h3>
    <p class="main__card-paragraph">
      ${places[i].description}
    </p>
    <div class="main__card-places__contBtns">
      <button class="main__card-btn" type="button">Visit place</button
      ><button class="main__card-btn-2" type="button">
        Add to favorites
      </button>
    </div>
  </article>`;

    cardList.innerHTML = currentHtml + card;
  }
}

function addListeners() {
  const cardsVisitButtons = document.querySelectorAll(".main__card-btn");

  cardsVisitButtons.forEach((element, index) => {
    element.addEventListener("click", (e) => {
      const { image, title, description } = places[index];
      clickVisitPlace(e, image, title, description);
    });
  });
}

close.addEventListener("click", closeModal);

export { addCard };
export { addListeners };
