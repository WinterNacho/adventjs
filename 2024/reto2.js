function createFrame(names) {
    let lengths = [];
    names.forEach((name)=> lengths.push(name.length));
    let len = Math.max(...lengths)
    let res = '*'.repeat(len + 4) + '\n';
    for (let i = 0; i < names.length; i++) {
        let padding = len - lengths[i];
        res += `* ${names[i]}${' '.repeat(padding)} *\n`;
    }
    res += '*'.repeat(len + 4); 
    return res;
}

console.log(createFrame(['midu', 'madeval', 'educalvolpz']))

// Resultado esperado:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

console.log(createFrame(['midu']))

// Resultado esperado:
// ********
// * midu *
// ********

console.log(createFrame(['a', 'bb', 'ccc']))

// Resultado esperado:
// *******
// * a   *
// * bb  *
// * ccc *
// *******

console.log(createFrame(['a', 'bb', 'ccc', 'dddd']))