const prompt = require("prompt-sync")();

// Challenge 1

let arr = [];

console.log("Donner 5 entiers");
for (let i = 1; i <= 5; i++) {
  arr.unshift(prompt("Donner un entier: "));
}

console.log("Les entiers dans un ordre inverse: ", arr);

// Challenge 2

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arr1Som = arr1.reduce((p, c) => {
  return p + c;
}, 0);

console.log(
  `la somme de tableue est ${arr1Som} et la moyenne est : ${
    arr1Som / arr1.length
  }`
);

// Challenge 3

let entiers = prompt("Donner 8 entiers: ");
let search = prompt("Donner un nombre à rechercher: ");

if (entiers.includes(search)) {
  console.log(
    `Le numéro existe et la position: ${entiers.indexOf(search) + 1}`
  );
} else {
  console.log("Le numéro n'existe pas");
}

// Challenge 4

let chaines = [];

console.log("Donner 3 chaînes de caractères");

for (let i = 1; i <= 3; i++) {
  chaines.push(prompt(`Donner une chaîne: `));
}

let searchChaine = prompt("Donner une chaînes à rechercher: ");

if (chaines.includes(searchChaine)) {
  console.log(
    `La chaîne "${searchChaine}" a été trouvée à la position ${
      chaines.indexOf(searchChaine) + 1
    }.`
  );
}

// Challenge 5

let tableu = [];

console.log("Donner 7 entiers");
for (let i = 1; i <= 7; i++) {
  tableu.push(+prompt("Donner un entier: "));
}

console.log(
  `L'entier qui plus grand est: "${Math.max(
    ...tableu
  )}" et l'entier qui plus petit est: "${Math.min(...tableu)}"`
);

// Challenge 6

let carrArray = [1, 2, 3, 4, 5];

for (let val of carrArray) {
  console.log(`${val}^2 = ${Math.pow(val, 2)}`);
}

// Challenge 8

let array = prompt("Entrer une chaîne: ").toLocaleLowerCase();
let voyelles = ["a", "e", "i", "o", "u", "y"];
let counter = 0;

for (let i = 0; i < voyelles.length; i++) {
  if (array.includes(voyelles[i])) {
    counter++;
  }
}

if (counter > 0) {
  console.log(`Nombre de voyelles : ${counter}`);
} else {
  console.log(`la chaîne ne contient pas des voyelles`);
}
