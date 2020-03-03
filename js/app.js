'use strict';
console.log('Pet Adoption Project GO!');

var petOne = {
    name: 'Fluffy',
    breed: 'maine coon',
    age: 0,
    imageName: 'diabloBlanoc',
    interests: ['sunlight', 'mouse toys', 'CatNip'],
    isGoodWithKids: false,
    isGoodWithDogs: true,
    isGoodWithCats: false,
    setAge: function() {
        this.age = randomAge(3, 12) + 'Months';
    }
};
petOne.setAge();

var petTwo = {
    name: 'Tiger',
    breed: 'Tiger',
    age: 0,
    imageName: 'tommyBob',
    interests: ['Rainy Days', 'Long walks on the Beach', 'Yarn'],
    isGoodWithKids: true,
    isGoodWithDogs: true,
    isGoodWithCats: true,
    setAge: function() {
        this.age = randomAge(3, 12) + 'Months';
    }
};

function randomAge(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
petOne.isFixed = true;
petTwo.isFixed = true;

//Create Dom element and render it in HTML

//create a new element the parent element of the child element that we will create to render the pet article
var parentEl = document.getElementById('kittenProfiles');

//create an article
var article = document.createElement('article');
console.log(article)
parentEl.appendChild(article);

//create an h2
var h2 = document.createElement('h2');
h2.textContent = 'Please adopt me, my name is ' + petOne.name;
article.appendChild(h2);

// create an p
var petpara = document.createElement('p');
petpara.textContent = 'cats are adoable, and this cat is ' + petOne.age + ' old';
article.appendChild(petpara);

//create a ul
var petUl = document.createElement('ul');
article.appendChild(petUl);

//create li
for (var i = 0; i < petOne.interests.length; i++) {
var petLi = document.createElement('li');

//fill in lists
petLi.textContent = petOne.interests[i];
petUl.appendChild(petLi);
}


//Add an image
// var petImg = document.createElement('img');
// petImg.setAttribute('src', 'images/' + petOne.imageName + '.jpg');
// petImg.setAttribute('alt', 'Cute Kitty, adopt now.');
// article.appendChild(petImg);

//set some values to image to display correctly