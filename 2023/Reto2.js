function manufacture(gifts, materials){
  return gifts.filter((gift) => {
     return gift.split('').every((letter) => 
        materials.includes(letter))})  
}
// TESTS

const test1 = manufacture(['tren', 'oso', 'pelota'], 'tronesa') // ["tren", "oso"]

const test2 = manufacture(['juego', 'puzzle'], 'jlepuz') // ["puzzle"]

const test3 = manufacture(['libro', 'ps5'], 'psli') // []

console.log(test1, test2, test3)