import { realtors } from "./data/realtors-data.js";
console.log(realtors);

const realtorsBlock = document.querySelector('#realtors');
const cards = [];

const generateCards = (count) => {

    for (let i = 0; i < count; i++) {
        cards.push(
            `
                <div class="realtor">
                    <a href="#">
                        <img src="../images/slider/realtor-${i}.jpg" alt="Риелтор ${i}" width="226" height="326">
                        <span>Имя ${i} человека</span>
                    </a>
                </div>
            `
        );
    }

    return cards;
}

const cardsArr = generateCards(10);
realtorsBlock.innerHTML = cardsArr.join('');


// /**
//  * Фильтрация карточек по заданным характеристикам
//  * @param {String} name - имя риелтора
//  * @param {String} image - имя изображения
//  * @param {String} type - тип недвижимости
//  * @param {String} country - страна
//  * @param {String} region - регион
//  * @param {String} city - город
//  * @param {String} experience - опыт работы
//  * @param {String} sex - пол
//  * @returns найденные совпадения
//  */
// const filterRealtors = (
//     name, 
//     image, 
//     type, 
//     country, 
//     region,
//     city, 
//     experience, 
//     sex
// ) => {
//     console.log(realtors);
//     return realtors.filter(realtor => {
//         return (
//             realtor.name === name &&
//             realtor.image === image &&
//             realtor.type === type &&
//             realtor.country === country &&
//             realtor.region === region &&
//             realtor.city === city &&
//             realtor.experience === experience &&
//             realtor.sex === sex
//         );
//     });    
// };

// /**
//  * Функция для отрисовки карточек
//  * @param {} realtor 
//  */
// const renderCards = (realtor) => {
//     const cardsContainer = document.querySelector('#realtors');
//     cardsContainer.innerHTML = '';

//     realtor.forEach(person => {
//         const card = document.createElement('div');
//         const link = document.createElement('a');
//         const img = document.createElement('img');
        
//         card.classList.add('realtor');
//         link.href = '#';
//         img.src = `./images/rieltor-${person.image}`;
//         img.width = '226';
//         img.height = '326';
//         img.alt = `Риелтор ${person.name}`;

//         link.appendChild(img);
//         card.appendChild(link);
//         cardsContainer.appendChild(card);
//     });
// };

// const searchButton = document.querySelector('#search');
// console.log(searchButton);

// searchButton.addEventListener('click', () => {
//     const typeSelect = document.querySelector('#type').value;
//     const countrySelect = document.querySelector('#select-country').value;
//     const regionSelect = document.querySelector('#region').value;
//     const citySelect = document.querySelector('#city').value;
//     const experienceSelect = document.querySelector('#experience').value;
//     const sexSelect = document.querySelector('#sex');

//     console.log(typeSelect);
//     console.log(countrySelect);
//     console.log(regionSelect);
//     console.log(regionSelect);
//     console.log(citySelect);
//     console.log(experienceSelect);
//     console.log(sexSelect);
// });

