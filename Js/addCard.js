import { places } from './data.js'

const newCard = document.getElementById("article-card");
const modal = document.getElementById('modal');
const mainTitle = document.getElementById('main__placess')
const headers = document.getElementById('headshot')
const modalCard = document.createElement('div');

function closeModal(e) {
    if (e) {
        modal.style.display = 'none';
        mainTitle.style.display = 'flex';
        headers.style.display = '';
        document.body.style.backgroundColor = '';
    }
}

function addCard() {
    for (let i = 0; i < places.length; i++) {
        function clickVisitPlace(e) {

            modalCard.innerHTML = '';
            modalCard.classList.add('main__modal')
            modal.appendChild(modalCard)

            const close = document.createElement('span')
            close.classList.add('closeModal')
            close.textContent = 'X';
            modalCard.appendChild(close)
            close.addEventListener('click', closeModal)

            const contTitle = document.createElement('div')
            contTitle.classList.add('main__modal-title');
            modalCard.appendChild(contTitle);

            const titleModal = document.createElement('h3');
            titleModal.classList.add('main__card-title');
            titleModal.textContent = places[i].title;
            contTitle.appendChild(titleModal);

            const containerModalCont = document.createElement('div')
            containerModalCont.classList.add('main__modal-content');
            modalCard.appendChild(containerModalCont);

            const containerImg = document.createElement('div');
            containerImg.classList.add('main__modal-img-container');
            containerModalCont.appendChild(containerImg);

            const modalImg = document.createElement('img');
            modalImg.classList.add('img');
            modalImg.src = places[i].image;
            containerImg.appendChild(modalImg);

            const modalParagraph = document.createElement('p');
            modalParagraph.classList.add('main__card-paragraph');
            modalParagraph.textContent = places[i].description;
            containerModalCont.appendChild(modalParagraph);

            modal.style.display = 'flex';
            mainTitle.style.display = 'none';
            headers.style.display = 'none'
            document.body.style.backgroundColor = 'rgba(63, 70, 58, 0.7)'
        }

        const place = document.createElement('article');
        place.classList.add('main__card');

        const divImg = document.createElement('div');
        divImg.classList.add('main__card-img-container');
        place.appendChild(divImg);

        const img = document.createElement('img');
        img.classList.add('main__card-img');
        img.src = places[i].image;
        divImg.appendChild(img);

        const titleCard = document.createElement('h3');
        titleCard.classList.add('main__card-title');
        titleCard.textContent = places[i].title;
        place.appendChild(titleCard);

        const text = document.createElement('p');
        text.classList.add('main__card-paragraph');
        text.textContent = places[i].description;
        place.appendChild(text);

        const contBtns = document.createElement('div');
        contBtns.classList.add('main__card-places__contBtns');
        place.appendChild(contBtns);

        const btn = document.createElement('button');
        btn.classList.add('main__card-btn');
        btn.id = 'btn1'
        btn.type = "button";
        btn.textContent = "Visit place";
        contBtns.appendChild(btn);
        btn.addEventListener('click', clickVisitPlace)

        const addFavorites = document.createElement('button');
        addFavorites.classList.add('main__card-btn-2');
        addFavorites.type = "button";
        addFavorites.textContent = "Add to favorites";
        contBtns.appendChild(addFavorites);

        newCard.appendChild(place);
    }
};


export { addCard };
