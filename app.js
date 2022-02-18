const number = Math.floor(Math.random() * 110);
console.log(`Your current age is ${number}`);

//Start of assignment 5.1


console.log("Every year on this planet is below");

let hand = 33;
for (hand = 1989; hand < 2023; ++hand) {
  console.log(`${hand}`)
}

let hand1 = 33;
while (hand1 <= 33) {
  console.log("Getting Older Now");
  hand1++
}


//While Loop

let limit = 7;
let shirts_ordered = 0;

while (shirts_ordered < limit) {
	shirts_ordered++;
	let capacity = limit - shirts_ordered;
	let message = capacity + " more shirts can be ordered.";
	console.log(message);
}


//DOM

const text = document.querySelector(".title");
const changeColor= document.querySelector(".changeColor");

changeColor.addEventListener("click", function() {
  text.classList.toggle("change");
})


//Event Listener

const userList = document.querySelector(".name-list");
const listInput = document.querySelector(".list-input");
const addListBtn = document.querySelector(".addListBtn");

addListBtn.addEventListener('click', function() {
  const newLi = document.createElement('LI');
  const liContent = document.createTextNode(listInput.value);
  newLi.appendChild(liContent);
  userList.appendChild(newLi);
  newLi.style.color = "Green";
})


function upperCase() {
  const x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}


function myMove() {
  let id = null;
  const elem = document.getElementById("animate");   
  let pos = 0;
 clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (pos == 125) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}

let root = document.documentElement;

root.addEventListener("mousemove", e => {
  root.style.setProperty('--mouse-x', e.clientX + "px");
  root.style.setProperty('--mouse-y', e.clientY + "px");
});




