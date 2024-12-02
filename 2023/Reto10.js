function createChristmasTree(ornaments, height) {
  let res = ''
  let num = 0

  for(let i = 0; i < height; i++){
    res += ' '.repeat(height - 1 - i) +ornaments[num]
    num == ornaments.length -1 ? num = 0 : num++ 
    for(let j = 0; j<i ;j++){
      res += ' ' + ornaments[num]
      num == ornaments.length -1 ? num = 0 : num++ 
    }
    res +='\n'
  }
  res += ' '.repeat(height-1) +'|' + '\n'
  return res
}

// TESTS 

console.log(createChristmasTree('123', 4))
//    1
//   2 3
//  1 2 3
// 1 2 3 1
//    |


console.log(createChristmasTree('*@o', 3))

//   *
//  @ o
// * @ o
//   |