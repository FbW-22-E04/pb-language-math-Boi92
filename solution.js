console.log('--------------------')
console.log('1.')
console.log('a)')
const lowestNr = [-1 , 0, 1, 2, 3, 4]
var min = Math.min.apply(Math, lowestNr)
var max = Math.max.apply(Math, lowestNr)
console.log(min)
console.log('b)')
console.log(max)
console.log('--------------------')
console.log('2.')
console.log('a)')

console.log(Math.ceil(3321.32321)); 
console.log(Math.ceil(326.76));
console.log(Math.ceil(76788.7));
console.log(Math.ceil(-9.78));
// console.log(Math.ceil(43.342.)); // error because of dot at the end

console.log('b)')
console.log(Math.floor(3321.32321)); 
console.log(Math.floor(326.76));
console.log(Math.floor(76788.7));
console.log(Math.floor(-9.78));
console.log(Math.floor(28.329));

console.log('--------------------')
console.log('3.')

const random1_6 = Math.floor( Math.random() * 6); 
var number_one = Math.floor(Math.random() * 6);

console.log(random1_6)
console.log(number_one)

