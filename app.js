var health = 100; // this is the full health status

let  x = 100;
const y = 25;

{  
  let x = 50; // this is block variable
}

let z = x * y;

const firstName = "Bundy"; // string variable

const car = {type:"BMW", model:"M3", color:"white"}; // obejct variable using const

// Add a property:
car.owner = "Manriquez";

// Display the property:








console.log(health + x + z + " " + firstName );
console.log("Car type and model is " + car.type + " " + car.model + " and owner is " + firstName + " " + car.owner);
