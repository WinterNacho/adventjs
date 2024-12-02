function findNaughtyStep(original, modified) {
  if(original.length === modified.length) return ''
  const iterator = original.length > modified.length ? original : modified
  for(let i =0; i<iterator.length; i++){
    if(original[i] !== modified[i])
      return iterator[i]
  }
}



// TESTS

console.log(findNaughtyStep('abcd', 'abcde')) // 'e'

console.log(findNaughtyStep('stepfor', "stepor")) // 'f'

console.log(findNaughtyStep('abcde', 'abcde')) // ''
