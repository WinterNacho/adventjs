function adjustLights(lights) {
  let count = 0
  for(let i=0; i<lights.length; i++) {
    if(lights[i] == '🟢' && i % 2 == 0)
      count += 1
    if(lights[i] == '🔴' && i % 2 == 1)
      count += 1
  }
    return Math.min(count, lights.length - count)
}

// TEST 
console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']))
// -> 1 (cambias la cuarta luz a 🔴)

console.log(adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢']))
// -> 1 (cambia la primera luz a verde)

console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']))
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']))
// -> 0 (ya están alternadas)

console.log(adjustLights(['🔴', '🔴', '🔴']))
// -> 1 (cambias la segunda luz a 🟢)