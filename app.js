const number = Math.floor(Math.random() * 110);
console.log(`Your current age is ${number}`);





//Assignment 4.4

//START OF ASSIGNMENT

const firstName = "Bundy";

const lastName = "Manriquez";

const age = 32;

const schoolYears = 3

//string concatenation
console.log(`Hello my name is ${firstName} ${lastName} and I am ${age} years old. ` +
 `I have been in school for ${schoolYears} years.`);


//if conditional statement

const dog1 = Math.floor(Math.random() * 20);;
if(dog1 < 10) {
  console.log('Your dog is still young!');
} else if(dog1 < 3) {
  console.log('Your dog is still a puppy!')
} else{
  console.log('Your dog is getting older...:(')
}


//switch statement
let month;
switch (new Date().getMonth()) {
  case 0:
    month = "January is an alright month.";
    break;
  case 1:
    month = "February is a cold month.";
    break;
  case 2:
    month = "March is a fun month.";
    break;
  case 3:
    month = "April is a nice month.";
    break;
  case 4:
    month = "May is a hot month.";
    break;
  default:
    month = "The other months are a blur";
}

console.log(month);


//String methods

let gyms = "Planet Fitness, Gold's Gym, Lifetime Fitness";
let currentGym = gyms.slice(0, 14);
let otherGym = gyms.substr(16, 10);
let lastGym = gyms.slice(-17);

console.log(`The gym I go to is called ${currentGym}. I used to go` +
  `to ${otherGym}. I have always wanted to go to ${lastGym}.`);

let search = "I like to use Bing for my search engine. "
let newSearch = search.replace("Bing", "Google");
let search1 = "Bing is a very helpful tool, but there are others besides Bing."
let newSearch1 = search1.replaceAll("Bing", "Google");

console.log(newSearch + newSearch1);


//Number methods

const num1 = "   54897.32    ";
const num2 = "476.43";

let num3 = 6.666;
const num4 = num3.toPrecision(1);
//num1 and num2 and num4 will be added to sahow up in the console log.

const combinedDescr = 'The total is ';
const newCombinedDescr = combinedDescr.toUpperCase();

const combinedNum = Number(num1) + Number(num2) + Number(num4);

console.log(newCombinedDescr + combinedNum);

const personAge = 32;

const internetAge = (age < 16) ? "Too young":"Old enough";

console.log(`${internetAge} to be on internet.`)
