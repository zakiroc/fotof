const arr = ['BMW', 'MERS', 'MClaren', 'Ford-Mustang', 'Audi']
const number = [2,-6,7,9,10]
// console.log(arr); tartiblab beradi
// arr.sort()
// console.log(arr);

// console.log(arr);
// arr.reverse()
// console.log(arr);

// console.log(arr);
// let a = arr.splice(1,2)
// console.log(arr);

// console.log(arr);
// arr.splice(1,2,'lacetti','bugatti')
// console.log(arr);

// console.log(arr);
// let jony = arr.join(' ,')
// console.log(jony);

// console.log(arr);
// for(let element of arr){
//     console.log(element);
// }


// let k = 8
// let n = 5

// for(let i = 0; i < 5 ; i++){
// console.log (`${k} ${i + 1} son`);
// }

// let a = 9
// let b = 21

// for(let i = a; i <= b ; i++){
// console.log (i);
// }

let letterSearch = ["хлеб", "мед", "банан", "яблоко", "Азиза", "цветок", "машина"];

let wordsWithN = [];
let wordsWithoutN = [];

for (let i = 0; i < letterSearch.length; i++) {
    if (letterSearch[i].toLowerCase().includes('н')) {
        wordsWithN.push(letterSearch[i]);
    } else {
        wordsWithoutN.push(letterSearch[i]);
    }
}

console.log("Слова с буквой 'н':", wordsWithN);
console.log("Слова без буквы 'н':", wordsWithoutN);



