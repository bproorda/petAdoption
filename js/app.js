'use strict';
console.log('Pet Adoption Project GO!');

// var petOne = {
    // name: 'Fluffy',
    // breed: 'maine coon',
    // age: 0,
    // imageName: 'diabloBlanoc',
    // interests: ['sunlight', 'mouse toys', 'CatNip'],
    // isGoodWithKids: false,
    // isGoodWithDogs: true,
    // isGoodWithCats: false,
//     setAge: function() {
//         this.age = randomAge(3, 12) + 'Months';
//     }
// };
// petOne.setAge();

//start constructor function for template
function Pet(name, breed, imageName, interests, isGoodWithKids, isGoodWithDogs, isGoodWithCats) {
    this.name = name;
    this.breed = breed;
    this.age = this.setAge();
    this.imageName = imageName;
    this.interests = interests;
    this.isGoodWithKids = isGoodWithKids;
    this.isGoodWithDogs = isGoodWithDogs;
    this.isGoodWithCats = isGoodWithCats;
}
//Pet.prototype.functionName = function(any, parameters, can, go, here) {}
//now, any pet created with the Pet constructor will be able to call this method.

Pet.prototype.setAge = function() {
    return randomAge(3, 12) + ' months';
};

function randomAge(min, max) {
    return Math.floor(Math.random()*(max-min+1) + min);
}

Pet.prototype.getInterests = function() {
    var randomIndex = Math.floor(Math.random()*this.interests.length);
    return this.interests[randomIndex];
};

//RENDERING FUNCTION: Create some DOM elements and then render them to the index.
Pet.prototype.render = function() {

//Grab the parent element
var parentEl = document.getElementById('kittenProfiles');
//create child elements: article, h2, p, ul, li, interests and image
var article = document.createElement('article');
parentEl.appendChild(article);

var h2 = document.createElement('h2');
h2.textContent = this.name;
article.appendChild(h2);

var para = document.createElement('p');
para.textContent = `${this.name}  is adorable and is ${this.age} old.`;
article.appendChild(para);

var petUl = document.createElement('ul');
article.appendChild(petUl);

for(var i = 0; i < this.interests.length; i++) {
    var li = document.createElement('li');
    li.textContent = this.interests[i];
    petUl.appendChild(li);
}

// var img = document.createElement('img');
// img.setAttribute('src', 'images/' +this.imageName + '.jpeg');
// img.setAttribute('alt', 'Adopt' + this.name + 'NOW!');
// article.appendChild(img);

var animalTable = document.getElementById('animal-table');

var petRow = document.createElement('tr');

var nameCell = document.createElement('td');
nameCell.textContent = this.name;
petRow.appendChild(nameCell)

var breedCell = document.createElement('td');
breedCell.textContent = this.breed;
petRow.appendChild(breedCell);

var ageCell = document.createElement('td');
ageCell.textContent = this.age;
petRow.appendChild(ageCell);

var interestsCell = document.createElement('td');
interestsCell.textContent = this.interests;
petRow.appendChild(interestsCell);


animalTable.appendChild(petRow);





};

var firstPet = new Pet('nova', 'lab', 'nova1', ['Hungry', 'Blue Eyes', 'good girl', 'chew toys'], true, true, true);

var secondPet = new Pet('tiger', 'american shorthair', 'diabloBlanco', ['curious', 'needy', 'small', 'whiskery'], true, true, true);
var thirdPet = new Pet('Iggy', 'iguana', 'diabloBlanco', ['lazy', 'green', 'dragony', 'chill'], true, true, true);

firstPet.setAge();
var adoptPet = [firstPet, secondPet, thirdPet]
//loop through the objects to show some information on the page
for (var i = 0; i < adoptPet.length; i++) {
    adoptPet[i].render();
}










//Create Dom element and render it in HTML

//create a new element the parent element of the child element that we will create to render the pet article
// var parentEl = document.getElementById('kittenProfiles');

//create an article
// var article = document.createElement('article');
// console.log(article)
// parentEl.appendChild(article);

// //create an h2
// var h2 = document.createElement('h2');
// h2.textContent = 'Please adopt me, my name is ' + petOne.name;
// article.appendChild(h2);

// // create an p
// var petpara = document.createElement('p');
// petpara.textContent = 'cats are adoable, and this cat is ' + petOne.age + ' old';
// article.appendChild(petpara);

// //create a ul
// var petUl = document.createElement('ul');
// article.appendChild(petUl);

// //create li
// for (var i = 0; i < petOne.interests.length; i++) {
// var petLi = document.createElement('li');

// //fill in lists
// petLi.textContent = petOne.interests[i];
// petUl.appendChild(petLi);
// }


// //Add an image
// // var petImg = document.createElement('img');
// // petImg.setAttribute('src', 'images/' + petOne.imageName + '.jpg');
// // petImg.setAttribute('alt', 'Cute Kitty, adopt now.');
// // article.appendChild(petImg);

// //set some values to image to display correctly