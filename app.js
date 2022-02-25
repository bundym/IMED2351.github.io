//STart of assignment 6.4

//Object and Object method
const newPerson = {
  firstName : "Bundy",
  lastName  : "Manriquez",
  age : 32,
  eyeColor  : "brown",
  height : "6ft 1in",
  gender : "male",
  weight : "185 lbs",
  fullName : function() {
    return this.firstName + " " + this.lastName;
  },
  measurements : function(){
    return this.height + ", " + this.weight;
  }
};

const d = new Date(89, 10, 13);

console.log(`I am ${newPerson.fullName()} and I am ${newPerson.age} years old.`+ 
` My measurements are ${newPerson.measurements()}. I was born on ${d.toDateString()}.`);

console.log(`My eyes are ${newPerson.eyeColor}.`);



//Array and Array Method

const characters = [
  'Mario',
  'Kirby',
  'Link',
  'Samus',
  'Isabella'
];

const secondTier = [
  'Incineroar',
  'Pikachu',
]

characters.push('Captain Falcon');
characters[characters.length] = 'Yoshi';
console.log(characters.sort());


document.getElementById("character").innerHTML = characters[2];

const myCharacters = characters.concat(secondTier);

console.log(`All characters I choose from are ${myCharacters}.`)

