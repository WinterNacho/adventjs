function decode(message) {
  const found = message.match(/\(([^*()]+)\)/)
  if(found === null) return message
  const reversed = found[0].slice(1,-1).split("").reverse().join("")
  const res = decode(message.replaceAll(found[0], reversed))
  return res
}

// TESTS
const z = decode('(is)')
console.log(z) // si

const y = decode('((am(gi)os) aloh)')
console.log(y) // hola amigos mios

const x = decode('hola (sogima) mios')
console.log(x) // hola amigos mios

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus