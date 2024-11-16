
function pigIt(str){
  let arr = str.split(' ');
  let result_arr = []
  for(let tmp of arr){
    if(/[a-zA-Z]+/.test(tmp)){
      tmp = tmp.substr(1)+tmp.substr(0,1)+'ay';
    }
    result_arr.push(tmp)
  }
  return result_arr.join(' ')
}
console.log(pigIt('Pig latin is cool'));