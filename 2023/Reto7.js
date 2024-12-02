function drawGift(size, symbol) {
  const br = '#', bs = ' '

  if(size === 1)
    return br + '\n'

  let gift = bs.repeat(size - 1) + br.repeat(size) + '\n'
  for(let i= 0; i < size-2 ; i++){
    gift += bs.repeat(size - 2 - i) + br + symbol.repeat(size-2)
    gift += br + symbol.repeat(i) + br + '\n' 
  }
  gift += br.repeat(size) + symbol.repeat(size-2)+ br +'\n'
  for(let i=size-2; i>0; i--){
    gift += br + symbol.repeat(size-2) + br
    gift += symbol.repeat(i-1) + br + '\n'
  }
  gift += br.repeat(size) + '\n'
  return gift
}


console.log(drawGift(4, '+'))

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

console.log(drawGift(5, '*'))
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

console.log(drawGift(1, '^'))
/*
#
*/

console.log(drawGift(2, '.'))
/*
##
###
##
*/

console.log(drawGift(3, '.'))
/*
  ###
 #.##
###.#
#.##
###
*/

