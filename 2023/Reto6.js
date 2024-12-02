function maxDistance(movements){
  let res = 0
  let ast = 0
  for(let i = 0; i<movements.length; i++){
    if(movements[i] === '<') res--;
    if(movements[i] === '>') res++;
    if(movements[i] === '*') ast++;
  }
  return Math.abs(res) + ast
}
// TESTS

const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5