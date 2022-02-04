function showMessage(text1, text2, text3,) {
  console.log("Hello " + text1 + text2 + text3);
}

showMessage("Omicron ", "Persei ", 8);

const planet = {
  color: "greenish color",
  life: " has life",
  age: "500 million years old",
  water: "no water"
};

console.log("About Planet: " + planet.color + ", " + 
  planet.life + ", " + planet.age + ", " + 
  planet.water + ".");

const date = {
  day: "3rd",
  month: "February",
  year: 5566,
  fullDate: function() {
    return "Year:" + this.year + ", " + this.day + " " + this.month;
  }
};

console.log(date.fullDate());

const number = Math.floor(Math.random() * 100);
console.log("Your current age is " + number);