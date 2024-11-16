
function accum(s) {
  let arr = s.split('').map((item, index) => {
    let tmp = item.repeat((index+1))
    return tmp.charAt(0).toUpperCase() + tmp.slice(1).toLowerCase()
  })
  return arr.join('-')
}

console.log(accum('cwAt'));
