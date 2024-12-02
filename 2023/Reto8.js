function organizeGifts(gifts) {
  const qty = gifts.match(/\d+/g).map(Number);
  const name = gifts.match(/[a-zA-Z]+/g)
  let res = ''

  for(let i = 0; i < qty.length; i++){
    let num= qty[i]
    let palets =  (num/50>>0)
    num = num % 50
    let boxes =  (num/10>>0)
    num = num % 10
    let palet =  '[' + name[i] + ']'
    let box = '{' + name[i] + '}'
    let bag = '(' + name[i].repeat(num) + ')' 
    let condBag = num > 0 ? 1 : 0
    res += palet.repeat(palets) + box.repeat(boxes) + bag.repeat(condBag)  
  }
  return res 
}

// TESTS 

const result1 = organizeGifts(`76a11b`)
console.log(result1)
// '[a]{a}{a}(aaaaaa){b}(b)'

const result2 = organizeGifts('20a')
console.log(result2)
//"{a}{a}"

const result3 = organizeGifts('1a')
console.log(result3)
// '(a)'