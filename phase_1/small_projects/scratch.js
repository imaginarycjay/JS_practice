const input = require("prompt-sync")();

const listOfFruits = ["saging", "apple", "avocado"];

//i want to know ways how to delete a list by id

let find = input("Search to delete: ");

const index = listOfFruits.findIndex(function (fruit) {
  return fruit === find;
});

if (index !== -1) {
  console.log(`item removed: ${listOfFruits[index]}`);
  listOfFruits.splice(index, 1);
} else {
  console.log("not found. try checking your spelling");
}

//easier way to iterate
/* 
listOfFruits.forEach((fruits, index) => {
  console.log(`${index + 1}. ${fruits}`);
}); */

listOfFruits.forEach((fruits) => {
  console.log(`fruits: ${fruits}`);
});
