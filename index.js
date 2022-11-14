
// Nedan är referenser till element i DOM:en som kan användas för att manipulera sidan

const dogInfo = document.getElementById('dogInfo');
const dogPic = document.getElementById('dogPic');
const button = document.getElementById('button');

button.addEventListener('click', nextDog);

// använd alltid engelska ord och camelCase när ni namnger era variabler

// Använd inte VAR! Förlegat koncept

var ettNamnTill = 'En pryl';


// const måste alltid ges ett värde när den skapas

const anotherName = 'Håkan';

// en let kan skapas utan värde

let aThirdName;

aThirdName = 'Kirus';


const dogName = 'Håkan';
const age = 12;
const age2 = 10;
const color = 'svart';
let isTired = true;
const interests = ['Mat', 'Bollar', 'Godis', 'Sova', 'Mat'];

const sum = age + age2;

let counter = 0;

console.log(dogName);
console.log(age);


if (isTired === true) {

    console.log('Håkan är trött');

} else {

    console.log('Håkan är pigg');

}

// Du kan ha 1 if, 1 else, men hur många else if som helst

/* if (color === 'svart') {

    dogInfo.innerHTML = 'Hunden har en mörk färg';

} else if (color === 'vit') {

    dogInfo.innerHTML = 'Hunden har en ljus färg';

} else {

    dogInfo.innerHTML = 'Hunden har en mellanfärg';

} */
console.log(interests[counter]);

console.log(sum);

//const newString = dogName + ' ' + 'är en' + ' ' + color + ' ' + 'hund';

const newString = `${dogName} är en ${color} hund`;

console.log(newString);
/* interests.forEach(interest => {
    console.log(interest);
}); */

const dog = {
    dogName: 'Håkan',
    picSrc: 'hakan.jpg',
    age: 12,
    color: 'svart',
    interests: ['Mat', 'Bollar', 'Godis', 'Sova', 'Mat'],
    isTired: true

};

const dog2 = {
    dogName: 'Kira',
    picSrc: 'kira.JPG',
    age: 10,
    color: 'brun',
    interests: ['Mat', 'Pinnar', 'Godis', 'Gosa', 'Mat'],
    isTired: false

};

const dog3 = {
    dogName: 'Enzo',
    picSrc: 'enzo.JPG',
    age: 4,
    color: 'vit',
    interests: ['Mat', 'Gömma sig under soffan', 'Godis', 'Skälla', 'Mat'],
    isTired: false

};

const dogArray = [];

dogArray.push(dog);
dogArray.push(dog2);
dogArray.push(dog3);

console.log(dogArray)

// const dogInfoText = `${dog.dogName} är en ${dog.color} hund som är ${dog.age} år gammal.`

// dogInfo.innerHTML = dogInfoText;

function updateDogInfo(dogObj) {

    let dogInfoHtml = `
    <h2>Det här är ${dogObj.dogName}</h2>
    <p>${dogObj.dogName} är en ${dogObj.color} hund som är ${dogObj.age} år gammal.</p>
    <h3>${dogObj.dogName}s intressen är:</h3>
    <ul>
    `

    dogObj.interests.forEach(element => {
        dogInfoHtml += `<li>${element}</li>`;
    });

    dogInfoHtml += `</ul>`;

    if (dogObj.isTired) {

        dogInfoHtml += `${dogObj.dogName} är trött och vill sova.`

    } else {

        dogInfoHtml += `${dogObj.dogName} är pigg och vill leka.`

    }

    dogInfoHtml += ``

    dogInfo.innerHTML = dogInfoHtml;
    dogPic.src = dogObj.picSrc;
}

function nextDog() {

    counter++;

    if (counter >= dogArray.length) {

        counter = 0;

    }

    updateDogInfo(dogArray[counter])

}

//updateDogInfo(dogArray[0]);

async function updateFromJson() {

    const response = await fetch('dogs.json');
    const data = await response.json();
    console.log(data);

    updateDogInfo(data.dogArray[0]);


}

updateFromJson();


