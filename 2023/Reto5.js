function cyberReindeer(road, time) {
  let actualPos = road.match(/S/).index
  let cleanRoad = road.replaceAll('S','.')
  let result = []
  let timer = 1
  result = [...result, road]
  while(timer < time){
    if(timer === 5){
      cleanRoad = cleanRoad.replaceAll('|','*')
    } 
    actualPos++
    if(cleanRoad[actualPos] == '|'){
      actualPos--;
    }
    let fp = cleanRoad.substring(0, actualPos) + 'S'
    let sp= cleanRoad.substring(actualPos + 1 , cleanRoad.length)
    result = [...result, fp+sp]
    timer++
  }
  return result
}

// TESTS

console.log(cyberReindeer('S.|.', 4))


const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)
console.log(result)

/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/


// const road2 = '..S....'
// const time2 = 3 // unidades de tiempo
// const result2 = cyberReindeer(road2, time2)
//console.log(result2)

// result = [.....S.]