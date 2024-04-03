import { places } from './data.js'

const newCard = document.getElementById("article-card");
const modal = document.getElementById('modal');
const mainTitle = document.getElementById('main__placess')
const headers = document.getElementById('headshot')
const close = document.getElementById('close')

function addCard() {
    for (let i = 0; i < places.length; i++) {

        const place = document.createElement('article');
        place.classList.add('main__card');
        newCard.appendChild(place);

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
        btn.type = "button";
        btn.textContent = "Visit place";
        contBtns.appendChild(btn);

        const addFavorites = document.createElement('button');
        addFavorites.classList.add('main__card-btn-2');
        addFavorites.type = "button";
        addFavorites.textContent = "Add to favorites";
        contBtns.appendChild(addFavorites);
    }
};

function clickVisitPlace() {

    newCard.addEventListener('click', (e) => {
        if (e.target.classList.contains('main__card-btn')) {
            modal.style.display = 'flex';
            mainTitle.style.display = 'none';
            headers.style.display = 'none'
            document.body.style.backgroundColor = 'rgba(63, 70, 58, 0.7)'
            console.log('hola')
        } else {
            console.log('chao')
        }
    })
}



function closeModal() {
    close.addEventListener('click', (e) => {
        if (e.target) {
            modal.style.display = 'none';
            mainTitle.style.display = 'flex';
            headers.style.display = '';
            document.body.style.backgroundColor = '';
            console.log('como estas')
        } else {
            console.log('bien y tu')
        }
    })
}
export { closeModal };
export { addCard };
export { clickVisitPlace }