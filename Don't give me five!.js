function dontGiveMeFive(start, end)
{
  let arrayLike = {
    length: (end-start+1)
  };
  let arr = Array.from(arrayLike, (_, index) => (index+start)+'');
  let count = 0;
  for(let tmp of arr){
    if(!tmp.includes('5')){
      count++;
    }
  }
  return count;
}



console.log(dontGiveMeFive(4,17));